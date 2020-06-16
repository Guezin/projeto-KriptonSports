import User from '@modules/users/infra/typeorm/entities/User';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(userData: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
