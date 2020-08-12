import { injectable, inject } from 'tsyringe';

import Product from '@modules/products/infra/typeorm/entities/Product';

import IProductRepository from '../repositories/IProductRepository';

interface IRequest {
  name: string;
  product_code: number;
  quantity: number;
  price: number;
  expiration_date: string;
}

interface IResponse {
  lot: string;
  product: Product;
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
    quantity,
    price,
    expiration_date,
  }: IRequest): Promise<IResponse> {
    const { lot, product } = await this.productRepository.create({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return { lot, product };
  }
}

export default CreateProductService;
