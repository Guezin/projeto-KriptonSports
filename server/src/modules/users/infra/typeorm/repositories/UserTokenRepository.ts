import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuidv4';

import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';

class UserTokenRepository implements IUserTokenRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async generate(user_id: string): Promise<string> {
    const userToken = this.ormRepository.create({
      token: uuid(),
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken.token;
  }
}

export default UserTokenRepository;
