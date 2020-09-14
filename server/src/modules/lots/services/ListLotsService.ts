import { injectable, inject } from 'tsyringe';

import Product from '@modules/lots/infra/typeorm/entities/Product';
import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import ILotRepository from '../repositories/ILotRepository';

interface IResponse {
  lot: number;
  expiration_date: string;
  product: Product;
}

@injectable()
class ListLotsService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute(): Promise<IResponse[]> {
    const lots = await this.lotRepository.listAll();

    const response = lots.map(lot => {
      return {
        lot: lot.id,
        expiration_date: lot.expiration_date,
        product: lot.product,
      };
    });

    return response;
  }
}

export default ListLotsService;
