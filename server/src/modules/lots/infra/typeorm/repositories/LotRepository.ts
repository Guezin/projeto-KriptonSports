import { getConnection, getRepository, Repository, Connection } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Product from '@modules/lots/infra/typeorm/entities/Product';
import Lot from '@modules/lots/infra/typeorm/entities/Lot';

import ILotDTO from '@modules/lots/dtos/ILotDTO';
import ISearchDTO from '@modules/lots/dtos/ISearchDTO';
import ILotRepository from '@modules/lots/repositories/ILotRepository';

interface IResponse {
  lot: Lot;
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
  }: ILotDTO): Promise<IResponse> {
    const trx = this.connection.createQueryRunner();

    try {
      await trx.startTransaction();

      const product = await trx.manager.getRepository(Product).save({
        name,
        product_code,
        quantity,
        price,
      });

      const lot = await trx.manager.getRepository(Lot).save({
        product_id: product.id,
        expiration_date,
      });

      await trx.commitTransaction();

      return { lot, product };
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

  public async findProductById(
    product_id: string
  ): Promise<Product | undefined> {
    const product = await this.ormRepositoryProduct.findOne({
      where: { id: product_id },
    });

    return product;
  }

  public async findByProductCode(
    product_code: number
  ): Promise<Product | undefined> {
    const product = await this.ormRepositoryProduct.findOne({
      where: { product_code },
    });

    return product;
  }

  public async searchTarget({ type, target }: ISearchDTO): Promise<void> {
    switch (type) {
      case 'lot':
        const result = await this.ormRepositoryLot.findOne({
          where: { id: Number(target) },
        });
        console.log(result);
        break;
      case 'expiration_date':
        const result2 = await this.ormRepositoryLot.find({
          where: {
            product: {
              expiration_date: target,
            },
          },
        });
        console.log(result2);
        break;
    }
  }

  public async saveProduct(product: Product): Promise<void> {
    await this.ormRepositoryProduct.save(product);
  }

  public async destroy(lot: Lot, product: Product): Promise<void> {
    await this.ormRepositoryLot.remove(lot);
    await this.ormRepositoryProduct.remove(product);
  }
}

export default LotRepository;
