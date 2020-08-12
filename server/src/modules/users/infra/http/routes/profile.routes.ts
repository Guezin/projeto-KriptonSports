import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.put('/', profileController.create);

export default profileRouter;
