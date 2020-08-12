import 'reflect-metadata';
import ListLotsService from './ListLotsService';

import FakeProductRepository from '../repositories/fakes/FakeProductRepository';
import FakeLotRepository from '../repositories/fakes/FakeLotRepository';

let fakeProductRepository: FakeProductRepository;
let fakeLotRepository: FakeLotRepository;
let listLotsService: ListLotsService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductRepository();
    fakeLotRepository = new FakeLotRepository();
    listLotsService = new ListLotsService(fakeLotRepository);
  });

  it('should be able to return a list of lot', async () => {
    const result01 = await fakeProductRepository.create({
      name: 'Whey Protein 100%',
      product_code: 123456,
      quantity: 10,
      price: 9.9,
      expiration_date: '2020-08-15',
    });

    const result02 = await fakeProductRepository.create({
      name: 'BCAA',
      product_code: 654321,
      quantity: 20,
      price: 35.9,
      expiration_date: '2020-11-30',
    });

    fakeLotRepository.save(result01);
    fakeLotRepository.save(result02);

    const lots = await listLotsService.execute();

    expect(lots).toHaveLength(2);
  });
});
