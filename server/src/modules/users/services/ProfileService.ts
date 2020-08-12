import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import IEncryptedPassword from '@modules/users/providers/ProvidesEncryptedPassword/models/IEncryptedPassword';

interface IRequest {
  id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class ProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('EncryptedPassword')
    private encryptedPassword: IEncryptedPassword
  ) {}

  public async execute({
    id: user_id,
    name,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists && userExists.id !== user.id) {
      throw new AppError('Email is already in use!');
    }

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password.'
      );
    }

    if (password && old_password) {
      const passwordIsValid = await this.encryptedPassword.compareHash(
        old_password,
        user.password
      );

      if (!passwordIsValid) {
        throw new AppError('Old password does not match, try again.');
      }
    }

    if (password) {
      user.password = await this.encryptedPassword.generateHash(password);
    }

    user.name = name;
    user.email = email;

    return await this.usersRepository.save(user);
  }
}

export default ProfileService;
