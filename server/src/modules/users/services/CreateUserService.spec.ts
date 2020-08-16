import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import CreateUserService from './CreateUserService';
import BCypt from '../providers/ProvidesEncryptedPassword/implementations/BCrypt';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
let encryptedPassword: BCypt;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    encryptedPassword = new BCypt();
    createUser = new CreateUserService(fakeUsersRepository, encryptedPassword);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
      manager: false,
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same e-mail', async () => {
    await createUser.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
      manager: false,
    });

    await expect(
      createUser.execute({
        name: 'John',
        surname: 'Trê',
        email: 'johndoe@email.com',
        password: '123456',
        manager: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
