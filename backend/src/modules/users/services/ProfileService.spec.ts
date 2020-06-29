import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ProfileService from './ProfileService';
import FakeBCrypt from '../providers/ProvidesEncryptedPassword/fakes/FakeBCrypt';

import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeBCrypt: FakeBCrypt;
let profileService: ProfileService;

describe('Profile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeBCrypt = new FakeBCrypt();
    profileService = new ProfileService(fakeUsersRepository, fakeBCrypt);
  });

  it('should be able updating the user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const response = await profileService.execute({
      id: user.id,
      name: 'John Trê',
      email: 'johntre@email.com',
    });

    expect(response.name).toEqual('John Trê');
    expect(response.email).toEqual('johntre@email.com');
  });

  it('should not be able to update if there is no user', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      profileService.execute({
        id: 'user-does-not-exist',
        name: 'Joe Trê',
        email: 'johntre@email.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const updatedUser = await profileService.execute({
      id: user.id,
      name: 'John Doe',
      email: 'johndoe@email.com',
      old_password: '123456',
      password: 'new-password',
    });

    expect(updatedUser.password).toBe('new-password');
  });

  it('should not be able to update if there is no user', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'johntre@email.com',
      password: '123456',
    });

    await expect(
      profileService.execute({
        id: user.id,
        name: 'Joe Trê',
        email: 'johndoe@email.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update if the old password is not informed', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      profileService.execute({
        id: user.id,
        name: 'Joe Doe',
        email: 'johndoe@email.com',
        password: 'new-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update if the old password is wrong', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      profileService.execute({
        id: user.id,
        name: 'Joe Doe',
        email: 'johndoe@email.com',
        old_password: 'wrong-password',
        password: 'new-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
