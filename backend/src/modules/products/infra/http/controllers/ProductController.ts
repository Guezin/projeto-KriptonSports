import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, product_code, date } = request.body;
    const productService = container.resolve(CreateProductService);

    const product = await productService.execute({
      name,
      product_code,
      date,
    });

    return response.json(product);
  }
}

export default ProductController;
