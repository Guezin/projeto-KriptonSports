import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductRepository from '../repositories/IProductRepository';

interface IRequest {
  name: string;
  product_code: string;
  date: Date;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  public async execute({
    name,
    product_code,
    date,
  }: IRequest): Promise<Product> {
    const product = await this.productRepository.create({
      name,
      product_code,
      date,
    });

    return product;
  }
}

export default CreateProductService;
