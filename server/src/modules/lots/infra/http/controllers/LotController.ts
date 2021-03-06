import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListLotsService from '@modules/lots/services/ListLotsService';
import CreateLotService from '@modules/lots/services/CreateLotService';
import UpdateLotService from '@modules/lots/services/UpdateLotService';
import DeleteLotService from '@modules/lots/services/DeleteLotService';

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

    const { lot, product } = await createLot.execute({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return response.json({
      lot: lot.id,
      expiration_date: lot.expiration_date,
      product,
    });
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

    const {
      id: lot,
      expiration_date: expirationDate,
      product,
    } = await updateLot.execute({
      lot: Number(id),
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return response.json({
      lot,
      expiration_date: expirationDate,
      product,
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id: lot } = request.params;
    const deleteLot = container.resolve(DeleteLotService);

    await deleteLot.execute(Number(lot));

    return response.status(200).json();
  }
}

export default LotController;
