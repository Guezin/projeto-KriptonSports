import { Request, Response } from 'express';

class SearchController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { target } = request.params;

    console.log(target);

    return response.json({});
  }
}

export default SearchController;
