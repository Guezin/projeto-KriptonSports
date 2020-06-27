import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductDTO from '@modules/products/dtos/IProductDTO';

export default interface IProductRepository {
  create(productData: IProductDTO): Promise<Product>;
}
