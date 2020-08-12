import 'reflect-metadata';
import CreateProductService from './CreateProductService';

import FakeProductRepository from '../repositories/fakes/FakeProductRepository';

let fakeProductRepository: FakeProductRepository;
let createProductService: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductRepository();
    createProductService = new CreateProductService(fakeProductRepository);
  });

  it('should be able to create a new product and add in lot', async () => {
    const result = await createProductService.execute({
      name: 'Whey Protein 100%',
      product_code: 123456,
      quantity: 10,
      price: 9.9,
      expiration_date: '2020-08-15',
    });

    expect(result.product).toHaveProperty('id');
    expect(result).toHaveProperty('lot');
  });
});
