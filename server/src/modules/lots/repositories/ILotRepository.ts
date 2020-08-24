import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import Product from '@modules/lots/infra/typeorm/entities/Product';

import IProductDTO from '@modules/lots/dtos/IProductDTO';

export default interface ILotRepository {
  create(productData: IProductDTO): Promise<Lot>;
  listAll(): Promise<Lot[]>;
  findById(id: string): Promise<Lot | undefined>;
  findByProductId(id: string): Promise<Product | undefined>;
  saveProduct(product: Product): Promise<void>;
}
