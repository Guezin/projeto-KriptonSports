import Lot from '@modules/products/infra/typeorm/entities/Lot';
import Product from '@modules/products/infra/typeorm/entities/Product';

import ILotRepository from '../ILotRepository';

interface ILot {
  lot: string;
  product: Product;
}

class FakeLotRepository implements ILotRepository {
  private lots: ILot[] = [];

  public async listAllLots(): Promise<ILot[]> {
    return this.lots;
  }

  public async save(lotData: ILot): Promise<void> {
    this.lots.push(lotData);
  }
}

export default FakeLotRepository;
