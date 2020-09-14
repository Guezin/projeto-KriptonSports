import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Lot from '../infra/typeorm/entities/Lot';
import ILotRepository from '../repositories/ILotRepository';

interface IRequest {
  lot: number;
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
    lot,
    name,
    product_code,
    quantity,
    price,
    expiration_date,
  }: IRequest): Promise<Lot> {
    const lotExists = await this.lotRepository.findByLot(lot);

    if (!lotExists) {
      throw new AppError('Sorry, lot not found!');
    }

    const { product_id } = lotExists;

    const product = await this.lotRepository.findProductById(product_id);

    if (!product) {
      throw new AppError('Sorry, product not found!');
    }

    product.name = name;
    product.quantity = quantity;
    product.price = price;
    product.product_code = product_code;

    lotExists.expiration_date = expiration_date;
    lotExists.product = product;

    await this.lotRepository.save({
      lot: lotExists,
      product,
    });

    return lotExists;
  }
}

export default UpdateLotService;
