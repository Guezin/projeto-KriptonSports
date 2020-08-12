import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    } = request.body;
    const productService = container.resolve(CreateProductService);

    const result = await productService.execute({
      name,
      product_code,
      quantity,
      price,
      expiration_date,
    });

    return response.json(result);
  }
}

export default ProductController;
