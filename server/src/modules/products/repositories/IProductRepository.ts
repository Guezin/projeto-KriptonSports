import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductDTO from '@modules/products/dtos/IProductDTO';

interface IResponse {
  lot: string;
  product: Product;
}

export default interface IProductRepository {
  create(productData: IProductDTO): Promise<IResponse>;
}
