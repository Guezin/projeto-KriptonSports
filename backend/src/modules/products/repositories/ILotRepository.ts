import Lot from '@modules/products/infra/typeorm/entities/Lot';
import Product from '@modules/products/infra/typeorm/entities/Product';

interface ILot {
  lot: string;
  product: Product;
}

export default interface ILotRepository {
  listAllLots(): Promise<ILot[]>;
  save(lotData: ILot): Promise<void>;
}
