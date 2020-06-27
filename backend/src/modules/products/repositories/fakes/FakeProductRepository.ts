import { uuid } from 'uuidv4';

import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductRepository from '../IProductRepository';
import IProductDTO from '@modules/products/dtos/IProductDTO';

class FakeProductRepository implements IProductRepository {
  private products: Product[] = [];

  public async create(productData: IProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, { id: uuid() }, productData);

    this.products.push(product);

    return product;
  }
}

export default FakeProductRepository;
