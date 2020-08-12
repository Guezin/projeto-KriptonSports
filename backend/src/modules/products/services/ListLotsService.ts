import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';
import ILotRepository from '../repositories/ILotRepository';

interface IResponse {
  lot: string;
  product: Product;
}

@injectable()
class ListLotsService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute(): Promise<IResponse[]> {
    const lots = await this.lotRepository.listAllLots();

    return lots;
  }
}

export default ListLotsService;
