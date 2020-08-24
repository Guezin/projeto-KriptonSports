import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import LotController from '../controllers/LotController';

const route = Router();
const lotController = new LotController();

route.get('/', lotController.index);

route.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      product_code: Joi.number().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required(),
      expiration_date: Joi.string().required(),
    }),
  }),
  lotController.create
);

route.put(
  '/:id',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      product_code: Joi.number().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required(),
      expiration_date: Joi.string().required(),
    }),
  }),
  lotController.update
);

export default route;
