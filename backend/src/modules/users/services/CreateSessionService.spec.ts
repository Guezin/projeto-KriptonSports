import CreateUserService from './CreateUserService';
import CreateSessionService from './CreateSessionService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import AppError from '@shared/errors/AppError';

describe('CreateSession', () => {
  it('should be able to authenticate user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const createSession = new CreateSessionService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
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
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const createSession = new CreateSessionService(fakeUsersRepository);

    await createUser.execute({
      name: 'John Doe',
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
});
