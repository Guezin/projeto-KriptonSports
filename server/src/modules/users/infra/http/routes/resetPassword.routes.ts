import { Router } from 'express';

import ResetPasswordController from '../controllers/ResetPasswordController';

const routes = Router();
const resetPassword = new ResetPasswordController();

routes.post('/', resetPassword.create);

export default routes;
