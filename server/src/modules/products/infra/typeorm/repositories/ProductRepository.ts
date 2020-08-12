import { getConnection, getRepository, Repository, QueryRunner } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Product from '@modules/products/infra/typeorm/entities/Product';
import Lot from '@modules/products/infra/typeorm/entities/Lot';

import IProductDTO from '@modules/products/dtos/IProductDTO';
import IProductRepository from '@modules/products/repositories/IProductRepository';

interface IResponse {
  lot: string;
  product: Product;
}

class ProductRepository implements IProductRepository {
  private trx: QueryRunner;

  constructor() {
    this.trx = getConnection().createQueryRunner();
  }

  public async create({
    name,
    product_code,
    quantity,
    price,
    expiration_date,
  }: IProductDTO): Promise<IResponse> {
    await this.trx.connect();

    try {
      await this.trx.startTransaction();

      const product = await this.trx.manager.getRepository(Product).save({
        name,
        product_code,
        quantity,
        price,
        expiration_date,
      });

      const lot = await this.trx.manager.getRepository(Lot).save({
        product_id: product.id,
      });

      await this.trx.commitTransaction();

      return { lot: lot.id, product };
    } catch {
      await this.trx.rollbackTransaction();

      throw new AppError('Sorry, error while creating the product');
    } finally {
      await this.trx.release();
    }
  }
}

export default ProductRepository;
