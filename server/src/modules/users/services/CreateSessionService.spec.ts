import CreateUserService from './CreateUserService';
import CreateSessionService from './CreateSessionService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import BCypt from '../providers/ProvidesEncryptedPassword/implementations/BCrypt';

import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
let createSession: CreateSessionService;
let encryptedPassword: BCypt;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    encryptedPassword = new BCypt();
    createUser = new CreateUserService(fakeUsersRepository, encryptedPassword);
    createSession = new CreateSessionService(
      fakeUsersRepository,
      encryptedPassword
    );
  });

  it('should be able to authenticate user', async () => {
    const user = await createUser.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const response = await createSession.execute({
      email: 'johndoe@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate a user with invalid e-mail', async () => {
    await createUser.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      createSession.execute({
        email: 'invalid@email.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not allow authenticating with the invalid password', async () => {
    await createUser.execute({
      name: 'John',
      surname: 'Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      createSession.execute({
        email: 'johndoe@email.com',
        password: 'invalid-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
