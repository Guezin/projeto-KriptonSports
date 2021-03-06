import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    surname,
    email,
    password,
    manager,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      surname,
      email,
      password,
      manager,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(user_id: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { id: user_id } });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { email } });

    return user;
  }

  public async save(user: User): Promise<User> {
    return await this.ormRepository.save(user);
  }
}

export default UsersRepository;
