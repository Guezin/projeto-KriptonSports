import { injectable, inject } from 'tsyringe';

import Lot from '@modules/lots/infra/typeorm/entities/Lot';

import ILotRepository from '../repositories/ILotRepository';

interface IRequest {
  name: string;
  product_code: number;
  quantity: number;
  price: number;
  expiration_date: string;
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
  }: IRequest): Promise<Lot> {
    const lot = await this.lotRepository.create({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return lot;
  }
}

export default CreateLotService;
