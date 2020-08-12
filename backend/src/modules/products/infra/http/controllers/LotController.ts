import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListLotsService from '@modules/products/services/ListLotsService';

class LotController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLots = container.resolve(ListLotsService);

    const lots = await listLots.execute();

    return response.json(classToClass(lots));
  }
}

export default LotController;
