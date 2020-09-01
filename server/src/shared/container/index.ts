import { container } from 'tsyringe';

import '@modules/users/providers';
import '@shared/providers/EmailProvider';

import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokenRespository from '@modules/users/repositories/IUserTokenRepository';
import UserTokenRepository from '@modules/users/infra/typeorm/repositories/UserTokenRepository';

import ILotRepository from '@modules/lots/repositories/ILotRepository';
import LotRepository from '@modules/lots/infra/typeorm/repositories/LotRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokenRespository>(
  'UserTokenRepository',
  UserTokenRepository
);

container.registerSingleton<ILotRepository>('LotRepository', LotRepository);
