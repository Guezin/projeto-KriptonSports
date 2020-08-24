import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListLotsService from '@modules/lots/services/ListLotsService';
import CreateLotService from '@modules/lots/services/CreateLotService';
import UpdateLotService from '@modules/lots/services/UpdateLotService';

class LotController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLots = container.resolve(ListLotsService);

    const lots = await listLots.execute();

    return response.json(lots);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    } = request.body;
    const createLot = container.resolve(CreateLotService);

    const lot = await createLot.execute({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return response.json(lot);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    } = request.body;
    const updateLot = container.resolve(UpdateLotService);

    const updatedLot = await updateLot.execute({
      id,
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return response.json(classToClass(updatedLot));
  }
}

export default LotController;
