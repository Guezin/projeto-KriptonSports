import { getRepository, Repository } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductDTO from '@modules/products/dtos/IProductDTO';
import IProductRepository from '@modules/products/repositories/IProductRepository';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    product_code,
    date,
  }: IProductDTO): Promise<Product> {
    const product = this.ormRepository.create({ name, product_code, date });

    await this.ormRepository.save(product);

    return product;
  }
}

export default ProductRepository;
