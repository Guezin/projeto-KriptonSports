import { injectable, inject } from 'tsyringe';

import ILotRepository from '../repositories/ILotRepository';
import ISearchDTO from '@modules/lots/dtos/ISearchDTO';

@injectable()
class SearchService {
  constructor(
    @inject('LotRepository')
    private lotRepository: ILotRepository
  ) {}

  public async execute({ type, target }: ISearchDTO): Promise<void> {
    const result = await this.lotRepository.searchTarget({
      type,
      target,
    });
  }
}

export default SearchService;
