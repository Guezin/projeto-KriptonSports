import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILotRepository from '../repositories/ILotRepository';

@injectable()
class DeleteLotService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute(lot: number): Promise<void> {
    const lotExists = await this.lotRepository.findByLot(lot);

    if (!lotExists) {
      throw new AppError('Sorry, lot not found!');
    }

    const { product_id } = lotExists;

    const product = await this.lotRepository.findProductById(product_id);

    if (!product) {
      throw new AppError('Sorry, product not found!');
    }

    await this.lotRepository.destroy(lotExists, product);
  }
}

export default DeleteLotService;
