import { getRepository, Repository } from 'typeorm';

import Lot from '@modules/products/infra/typeorm/entities/Lot';

import ILotRepository from '@modules/products/repositories/ILotRepository';

class LotRepository implements ILotRepository {
  private ormRepository: Repository<Lot>;

  constructor() {
    this.ormRepository = getRepository(Lot);
  }

  public async listAllLots(): Promise<Lot[]> {
    return await this.ormRepository.find();
  }
}

export default LotRepository;
