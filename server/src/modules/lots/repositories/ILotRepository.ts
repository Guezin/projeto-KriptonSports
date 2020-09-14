import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import Product from '@modules/lots/infra/typeorm/entities/Product';

import ILotDTO from '@modules/lots/dtos/ILotDTO';
import ISearchDTO from '@modules/lots/dtos/ISearchDTO';

interface IResponse {
  lot: Lot;
  product: Product;
}

export default interface ILotRepository {
  create(lotData: ILotDTO): Promise<IResponse>;
  listAll(): Promise<Lot[]>;
  findById(id: number): Promise<Lot | undefined>;
  findProductById(product_id: string): Promise<Product | undefined>;
  findByProductCode(product_code: number): Promise<Product | undefined>;
  searchTarget({ type, target }: ISearchDTO): Promise<void>;
  saveProduct(product: Product): Promise<void>;
  destroy(lot: Lot, product: Product): Promise<void>;
}
