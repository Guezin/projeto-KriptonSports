import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '@modules/lots/infra/typeorm/entities/Product';

import ILotRepository from '../repositories/ILotRepository';
import ISearchDTO from '@modules/lots/dtos/ISearchDTO';

interface IResponse {
  lot: number;
  expiration_date: string;
  product: Product;
}

@injectable()
class SearchService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute({ type, target }: ISearchDTO): Promise<IResponse[]> {
    const lotsFound = await this.lotRepository.searchTarget({
      type,
      target,
    });

    if (!lotsFound) {
      throw new AppError('No results were found for your search');
    }

    const response = lotsFound.map(lot => {
      return {
        lot: lot.id,
        expiration_date: lot.expiration_date,
        product: lot.product,
      };
    });

    return response;
  }
}

export default SearchService;
