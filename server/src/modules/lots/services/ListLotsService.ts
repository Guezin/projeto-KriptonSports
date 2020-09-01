import { injectable, inject } from 'tsyringe';

import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import ILotRepository from '../repositories/ILotRepository';

@injectable()
class ListLotsService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute(): Promise<Lot[]> {
    const lots = await this.lotRepository.listAll();

    return lots;
  }
}

export default ListLotsService;