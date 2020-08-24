import { uuid } from 'uuidv4';

import Product from '@modules/lots/infra/typeorm/entities/Product';
import Lot from '@modules/lots/infra/typeorm/entities/Lot';

import ILotRepository from '../ILotRepository';
import IProductDTO from '@modules/lots/dtos/IProductDTO';

const product = new Product();
const lot = new Lot();

class FakeProductRepository implements ILotRepository {
  private lots: Lot[] = [];

  constructor() {
    this.lots = [];
  }

  public async create(productData: IProductDTO): Promise<Lot> {
    Object.assign(product, { id: uuid() }, productData);
    Object.assign(lot, {
      id: Math.floor(Math.random() * 100),
      product_id: product.id,
    });

    this.lots.push(lot);

    return lot;
  }

  public async listAll(): Promise<Lot[]> {
    return this.lots;
  }

  public async findById(id: string): Promise<Lot | undefined> {
    const lot = this.lots.find(findLot => findLot.id === id);

    return lot;
  }
}

export default FakeProductRepository;
