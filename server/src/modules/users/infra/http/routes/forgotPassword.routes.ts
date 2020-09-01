import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';

import ForgotPasswordController from '../controllers/ForgotPasswordController';

const routes = Router();
const forgotPasswordController = new ForgotPasswordController();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
  }),
  forgotPasswordController.create
);

export default routes;
