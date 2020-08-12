import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import IEncryptedPassowrd from '../providers/ProvidesEncryptedPassword/models/IEncryptedPassword';

interface IRequest {
  name: string;
  email: string;
  password: string;
  manager?: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,

    @inject('EncryptedPassword')
    private encryptedPassword: IEncryptedPassowrd
  ) {}

  public async execute({
    name,
    email,
    password,
    manager,
  }: IRequest): Promise<User> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('Sorry, but that user already exists!', 401);
    }

    const passwordHashed = await this.encryptedPassword.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHashed,
      manager,
    });

    return user;
  }
}

export default CreateUserService;
