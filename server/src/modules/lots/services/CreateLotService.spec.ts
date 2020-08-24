import 'reflect-metadata';
import CreateLotService from './CreateLotService';

import FakeLotRepository from '../repositories/fakes/FakeLotRepository';

let fakeLotRepository: FakeLotRepository;
let createLotService: CreateLotService;

describe('CreateLot', () => {
  beforeEach(() => {
    fakeLotRepository = new FakeLotRepository();
    createLotService = new CreateLotService(fakeLotRepository);
  });

  it('should be able to create a lot', async () => {
    const result = await createLotService.execute({
      name: 'Whey Protein 100%',
      product_code: 123456,
      quantity: 10,
      price: 9.9,
      expiration_date: '2020-08-15',
    });

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('product_id');
  });
});
