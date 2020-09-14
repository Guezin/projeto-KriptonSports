import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchService from '@modules/lots/services/SearchService';

class SearchController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { type, target } = request.body;
    const searchService = container.resolve(SearchService);

    const lots = await searchService.execute({ type, target });

    return response.json(lots);
  }
}

export default SearchController;
