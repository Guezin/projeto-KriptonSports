import { uuid } from 'uuidv4';

import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductRepository from '../IProductRepository';
import IProductDTO from '@modules/products/dtos/IProductDTO';

import Lot from '@modules/products/infra/typeorm/entities/Lot';

interface IResponse {
  lot: string;
  product: Product;
}

class FakeProductRepository implements IProductRepository {
  private products: Product[] = [];

  constructor() {
    this.products = [];
  }

  public async create(productData: IProductDTO): Promise<IResponse> {
    const product = new Product();

    const lot = new Lot();

    Object.assign(product, { id: uuid() }, productData);
    Object.assign(lot, {
      id: Math.floor(Math.random() * 100),
      product_id: product.id,
    });

    this.products.push(product);

    return { lot: lot.id, product };
  }
}

export default FakeProductRepository;
