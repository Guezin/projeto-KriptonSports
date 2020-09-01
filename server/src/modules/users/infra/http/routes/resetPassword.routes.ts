import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';

import ResetPasswordController from '../controllers/ResetPasswordController';

const routes = Router();
const resetPassword = new ResetPasswordController();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      token: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  resetPassword.create
);

export default routes;
