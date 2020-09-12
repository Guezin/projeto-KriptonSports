import { uuid } from 'uuidv4';

import Product from '@modules/lots/infra/typeorm/entities/Product';
import Lot from '@modules/lots/infra/typeorm/entities/Lot';

import ILotRepository from '../ILotRepository';
import IProductDTO from '@modules/lots/dtos/IProductDTO';

interface ILotInfo {
  lot: number;
  product: Product;
}

const product = new Product();
const lot = new Lot();

class FakeLotRepository implements ILotRepository {
  private lotsInfo: ILotInfo[] = [];
  private lots: Lot[] = [];
  private products: Product[] = [];

  constructor() {
    this.lotsInfo = [];
    this.lots = [];
    this.products = [];
  }

  public async create(productData: IProductDTO): Promise<ILotInfo> {
    const newProduct = Object.assign(product, { id: uuid() }, productData);
    const newLot = Object.assign(lot, {
      id: Math.floor(Math.random() * 100) + 1,
      product_id: newProduct.id,
      product: newProduct,
    });

    this.lotsInfo.push({ lot: newLot.id, product: newProduct });
    this.lots.push(newLot);
    this.products.push(newProduct);

    return { lot: newLot.id, product: newProduct };
  }

  public async listAll(): Promise<Lot[]> {
    return this.lots;
  }

  public async findById(id: number): Promise<Lot | undefined> {
    const lot = this.lots.find(findLot => findLot.id === id);

    return lot;
  }

  public async findProductById(
    product_id: string
  ): Promise<Product | undefined> {
    const product = this.products.find(
      findProduct => findProduct.id === product_id
    );

    return product;
  }

  public async findByProductCode(
    product_code: number
  ): Promise<Product | undefined> {
    const findProduct = this.products.find(
      _product => _product.product_code === product_code
    );

    return findProduct;
  }

  public async saveProduct(_product: Product): Promise<void> {
    const indexProduct = this.products.findIndex(
      findProduct => findProduct.id === product.id
    );

    this.products[indexProduct] = product;
  }

  public async destroy(lot: Lot, product: Product): Promise<void> {
    const findIndexLot = this.lots.findIndex(findLot => findLot.id === lot.id);
    const findIndexProduct = this.products.findIndex(
      findProduct => findProduct.id === product.id
    );

    this.lots.splice(findIndexLot, 1);
    this.products.splice(findIndexProduct, 1);
  }
}

export default FakeLotRepository;
