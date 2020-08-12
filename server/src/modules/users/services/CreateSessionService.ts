import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import IEncryptedPassword from '../providers/ProvidesEncryptedPassword/models/IEncryptedPassword';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('EncryptedPassword')
    private encryptedPassword: IEncryptedPassword
  ) {}

  public async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists!');
    }

    const passwordIsValid = await this.encryptedPassword.compareHash(
      password,
      user.password
    );

    if (!passwordIsValid) {
      throw new AppError('Credencials email/password incorret, try again!');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, { expiresIn, subject: user.id });

    return { user, token };
  }
}

export default CreateSessionService;
