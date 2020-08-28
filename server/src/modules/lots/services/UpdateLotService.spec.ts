import AppError from '@shared/errors/AppError';

import FakeLotRepository from '../repositories/fakes/FakeLotRepository';

import UpdateLotService from './UpdateLotService';

let fakeLotRepository: FakeLotRepository;
let updateLot: UpdateLotService;

describe('UpdateLot', () => {
  beforeEach(() => {
    fakeLotRepository = new FakeLotRepository();
    updateLot = new UpdateLotService(fakeLotRepository);
  });

  it('should be able to update the lot', async () => {
    const { lot } = await fakeLotRepository.create({
      name: 'teste-name',
      quantity: 10,
      price: 25.5,
      product_code: 123456,
      expiration_date: '01/01/2020',
    });

    const updatedLot = await updateLot.execute({
      id: lot,
      name: 'creatina',
      quantity: 15,
      price: 30.0,
      product_code: 123456,
      expiration_date: '02/02/2020',
    });

    expect(updatedLot.product.name).toEqual('creatina');
    expect(updatedLot.product.quantity).toEqual(15);
    expect(updatedLot.product.price).toEqual(30.0);
    expect(updatedLot.product.expiration_date).toEqual('02/02/2020');
  });

  it('should not be able to update the lot if non exists', async () => {
    await fakeLotRepository.create({
      name: 'teste-name',
      quantity: 10,
      price: 25.5,
      product_code: 111111,
      expiration_date: '01/01/2020',
    });

    await expect(
      updateLot.execute({
        id: 0,
        name: 'creatina',
        quantity: 15,
        price: 30.0,
        product_code: 123456,
        expiration_date: '02/02/2020',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the lot if the product non exists', async () => {
    const { lot } = await fakeLotRepository.create({
      name: 'teste-name',
      quantity: 10,
      price: 25.5,
      product_code: 123456,
      expiration_date: '01/01/2020',
    });

    await expect(
      updateLot.execute({
        id: lot,
        name: 'product-non-exists',
        quantity: 15,
        price: 30.0,
        product_code: 0,
        expiration_date: '02/02/2020',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
