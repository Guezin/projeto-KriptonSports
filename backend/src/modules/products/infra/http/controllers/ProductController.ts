import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { parseISO } from 'date-fns';

import CreateProductService from '@modules/products/services/CreateProductService';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, product_code, date } = request.body;
    const dateFormatted = parseISO(date);
    const productService = container.resolve(CreateProductService);

    const product = await productService.execute({
      name,
      product_code,
      date: dateFormatted,
    });

    return response.json(product);
  }
}

export default ProductController;
