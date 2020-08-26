import { injectable, inject } from 'tsyringe';

import Lot from '@modules/lots/infra/typeorm/entities/Lot';
import Product from '@modules/lots/infra/typeorm/entities/Product';

import ILotRepository from '../repositories/ILotRepository';

interface IRequest {
  name: string;
  product_code: number;
  quantity: number;
  price: number;
  expiration_date: string;
}

interface IResponse {
  lot: number;
  product: Product;
}

@injectable()
class CreateLotService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute({
    name,
    product_code,
    quantity,
    price,
    expiration_date,
  }: IRequest): Promise<IResponse> {
    const { lot, product } = await this.lotRepository.create({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return { lot, product };
  }
}

export default CreateLotService;
