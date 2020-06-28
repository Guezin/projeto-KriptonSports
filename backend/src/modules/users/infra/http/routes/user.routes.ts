import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UserController from '../controllers/UserController';

const routes = Router();
const userController = new UserController();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      manager: Joi.string(),
    }),
  }),
  userController.create
);

export default routes;
