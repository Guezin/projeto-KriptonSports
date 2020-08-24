import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ILotRepository from '@modules/lots/repositories/ILotRepository';
import LotRepository from '@modules/lots/infra/typeorm/repositories/LotRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ILotRepository>('LotRepository', LotRepository);
