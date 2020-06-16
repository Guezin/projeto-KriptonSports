import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);
