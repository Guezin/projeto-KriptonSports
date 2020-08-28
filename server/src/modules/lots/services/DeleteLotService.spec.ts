import AppError from '@shared/errors/AppError';

import FakeLotRepository from '../repositories/fakes/FakeLotRepository';

import DeleteLotService from './DeleteLotService';

let fakeLotRepository: FakeLotRepository;
let deleteLot: DeleteLotService;

describe('DeleteLot', () => {
  beforeEach(() => {
    fakeLotRepository = new FakeLotRepository();
    deleteLot = new DeleteLotService(fakeLotRepository);
  });

  it('should be able to delete a lot', async () => {
    const { lot } = await fakeLotRepository.create({
      name: 'product-name',
      quantity: 10,
      price: 29.9,
      product_code: 123456,
      expiration_date: '01/01/2020',
    });

    const destroyLot = jest.spyOn(fakeLotRepository, 'destroy');

    await deleteLot.execute(lot);

    expect(destroyLot).toHaveBeenCalledWith(lot);
  });

  it('should not be able to delete a lot if non exists!', async () => {
    await fakeLotRepository.create({
      name: 'product-name',
      quantity: 10,
      price: 29.9,
      product_code: 123456,
      expiration_date: '01/01/2020',
    });

    await expect(deleteLot.execute(0)).rejects.toBeInstanceOf(AppError);
  });
});
