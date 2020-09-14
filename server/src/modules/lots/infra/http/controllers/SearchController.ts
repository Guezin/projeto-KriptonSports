import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchService from '@modules/lots/services/SearchService';

class SearchController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { type } = request.params;
    const { target } = request.body;
    const searchService = container.resolve(SearchService);

    await searchService.execute({ type, target });

    return response.json({});
  }
}

export default SearchController;
