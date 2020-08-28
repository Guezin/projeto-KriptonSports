import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Lot from '../infra/typeorm/entities/Lot';
import ILotRepository from '../repositories/ILotRepository';

interface IRequest {
  id: number;
  name: string;
  product_code: number;
  quantity: number;
  price: number;
  expiration_date: string;
}

@injectable()
class UpdateLotService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute({
    id,
    name,
    product_code,
    quantity,
    price,
    expiration_date,
  }: IRequest): Promise<Lot> {
    const lot = await this.lotRepository.findById(id);

    if (!lot) {
      throw new AppError('Sorry, lot not found!');
    }

    const product = await this.lotRepository.findByProductCode(product_code);

    if (!product) {
      throw new AppError('Sorry, product not found!');
    }

    product.name = name;
    product.quantity = quantity;
    product.price = price;
    product.product_code = product_code;
    product.expiration_date = expiration_date;

    lot.product = product;

    await this.lotRepository.saveProduct(product);

    return lot;
  }
}

export default UpdateLotService;
