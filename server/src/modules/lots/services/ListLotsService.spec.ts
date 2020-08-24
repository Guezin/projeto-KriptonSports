import 'reflect-metadata';
import ListLotsService from './ListLotsService';

import FakeLotRepository from '../repositories/fakes/FakeLotRepository';

let fakeLotRepository: FakeLotRepository;
let listLotsService: ListLotsService;

describe('ListLots', () => {
  beforeEach(() => {
    fakeLotRepository = new FakeLotRepository();
    listLotsService = new ListLotsService(fakeLotRepository);
  });

  it('should be able to return a list of lots', async () => {
    await fakeLotRepository.create({
      name: 'Whey Protein 100%',
      product_code: 123456,
      quantity: 10,
      price: 9.9,
      expiration_date: '2020-08-15',
    });

    await fakeLotRepository.create({
      name: 'BCAA',
      product_code: 654321,
      quantity: 20,
      price: 35.9,
      expiration_date: '2020-11-30',
    });

    const lots = await listLotsService.execute();

    expect(lots).toHaveLength(2);
  });
});
