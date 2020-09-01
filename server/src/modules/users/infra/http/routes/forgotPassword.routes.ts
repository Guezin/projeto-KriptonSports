import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';

const routes = Router();
const forgotPasswordController = new ForgotPasswordController();

routes.post('/', forgotPasswordController.create);

export default routes;
