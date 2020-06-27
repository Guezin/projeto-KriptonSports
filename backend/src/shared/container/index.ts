import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRespository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IProductRepository from '@modules/products/repositories/IProductRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository';

container.registerSingleton<IUsersRespository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);
