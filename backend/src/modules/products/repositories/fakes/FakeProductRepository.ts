import { uuid } from 'uuidv4';

import Product from '@modules/products/infra/typeorm/entities/Product';
import Lot from '@modules/products/infra/typeorm/entities/Lot';

import IProductRepository from '../IProductRepository';
import IProductDTO from '@modules/products/dtos/IProductDTO';

interface IResponse {
  lot: string;
  product: Product;
}

class FakeProductRepository implements IProductRepository {
  private products: Product[] = [];
  private lots: Lot[] = [];

  constructor() {
    this.products = [];
    this.lots = [];
  }

  public async create(productData: IProductDTO): Promise<IResponse> {
    const product = new Product();
    const lot = new Lot();

    Object.assign(product, { id: uuid() }, productData);
    Object.assign(lot, { id: this.lots.length + 1, product_id: product.id });

    this.products.push(product);
    this.lots.push(lot);

    return { lot: lot.id, product };
  }
}

export default FakeProductRepository;
