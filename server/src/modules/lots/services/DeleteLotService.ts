import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILotRepository from '../repositories/ILotRepository';

@injectable()
class DeleteLotService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute(id: number): Promise<void> {
    const lot = await this.lotRepository.findById(id);

    if (!lot) {
      throw new AppError('Sorry, lot not found!');
    }

    const product = await this.lotRepository.findProductById(lot.product_id);

    if (!product) {
      throw new AppError('Sorry, product not found!');
    }

    await this.lotRepository.destroy(lot, product);
  }
}

export default DeleteLotService;
