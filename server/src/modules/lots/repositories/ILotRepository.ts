import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import Product from '@modules/lots/infra/typeorm/entities/Product';

import IProductDTO from '@modules/lots/dtos/IProductDTO';

interface IResponse {
  lot: number;
  product: Product;
}

export default interface ILotRepository {
  create(productData: IProductDTO): Promise<IResponse>;
  listAll(): Promise<Lot[]>;
  findById(id: number): Promise<Lot | undefined>;
  findByProductCode(product_code: number): Promise<Product | undefined>;
  saveProduct(product: Product): Promise<void>;
  destroy(id: number): Promise<void>;
}
