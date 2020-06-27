import 'reflect-metadata';
import CreateProductService from './CreateProductService';

import FakeProductRepository from '../repositories/fakes/FakeProductRepository';

describe('CreateProduct', () => {
  it('should be able to create a new product', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const createProductService = new CreateProductService(
      fakeProductRepository
    );

    const product = await createProductService.execute({
      name: 'Whey Protein',
      product_code: '123456',
      date: new Date(),
    });

    expect(product).toHaveProperty('id');
  });
});
