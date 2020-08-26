import { getConnection, getRepository, Repository, QueryRunner } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Product from '@modules/lots/infra/typeorm/entities/Product';
import Lot from '@modules/lots/infra/typeorm/entities/Lot';

import IProductDTO from '@modules/lots/dtos/IProductDTO';
import ILotRepository from '@modules/lots/repositories/ILotRepository';

interface IResponse {
  lot: number;
  product: Product;
}

class LotRepository implements ILotRepository {
  private trx: QueryRunner;
  private ormRepositoryLot: Repository<Lot>;
  private ormRepositoryProduct: Repository<Product>;

  constructor() {
    this.trx = getConnection().createQueryRunner();
    this.ormRepositoryLot = getRepository(Lot);
    this.ormRepositoryProduct = getRepository(Product);
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

  public async listAll(): Promise<Lot[]> {
    const lot = await this.ormRepositoryLot.find();

    return lot;
  }

  public async findById(id: number): Promise<Lot | undefined> {
    const lot = await this.ormRepositoryLot.findOne({
      where: { id },
    });

    return lot;
  }

  public async findByProductId(id: string): Promise<Product | undefined> {
    const product = await this.ormRepositoryProduct.findOne({
      where: { id },
    });

    return product;
  }

  public async saveProduct(product: Product): Promise<void> {
    await this.ormRepositoryProduct.save(product);
  }

  public async destroy(id: number): Promise<void> {
    await this.ormRepositoryLot.delete(id);
  }
}

export default LotRepository;
