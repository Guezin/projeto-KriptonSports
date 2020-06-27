import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ProductController from '../controllers/ProductController';

const route = Router();
const productController = new ProductController();

route.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      product_code: Joi.string().required(),
      date: Joi.date().required(),
    }),
  }),
  productController.create
);

export default route;
