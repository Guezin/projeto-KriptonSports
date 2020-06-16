import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import CreateUserService from './CreateUserService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
      manager: false,
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same e-mail', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
      manager: false,
    });

    await expect(
      createUserService.execute({
        name: 'John Trê',
        email: 'johndoe@email.com',
        password: '123456',
        manager: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
