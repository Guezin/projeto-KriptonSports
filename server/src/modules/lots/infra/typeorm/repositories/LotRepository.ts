import {
  getConnection,
  getRepository,
  Repository,
  QueryRunner,
  Connection,
} from 'typeorm';

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
  private connection: Connection;
  private ormRepositoryLot: Repository<Lot>;
  private ormRepositoryProduct: Repository<Product>;

  constructor() {
    this.connection = getConnection();
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
    const trx = this.connection.createQueryRunner();

    try {
      await trx.startTransaction();

      const product = await trx.manager.getRepository(Product).save({
        name,
        product_code,
        quantity,
        price,
        expiration_date,
      });

      const lot = await trx.manager.getRepository(Lot).save({
        product_id: product.id,
      });

      await trx.commitTransaction();

      return { lot: lot.id, product };
    } catch {
      await trx.rollbackTransaction();

      throw new AppError('Sorry, error while creating the product');
    } finally {
      await trx.release();
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

  public async findByProductCode(
    product_code: number
  ): Promise<Product | undefined> {
    const product = await this.ormRepositoryProduct.findOne({
      where: { product_code },
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
