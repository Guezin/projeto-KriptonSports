import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUserTokenRepository from '../repositories/IUserTokenRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import IEncryptedPassowrd from '../providers/ProvidesEncryptedPassword/models/IEncryptedPassword';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('EncryptedPassword')
    private encryptedPassword: IEncryptedPassowrd
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const findToken = await this.userTokenRepository.findByToken(token);

    if (!findToken) {
      throw new AppError('Sorry, verification token not found!', 401);
    }

    const { user_id } = findToken;

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Sorry, user not found!', 401);
    }

    user.password = await this.encryptedPassword.generateHash(password);

    await this.usersRepository.save(user);
  }
}

export default ResetPasswordService;
