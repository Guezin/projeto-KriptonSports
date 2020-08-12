import { Router } from 'express';

import LotController from '../controllers/LotController';

const route = Router();
const lotController = new LotController();

route.get('/', lotController.index);

export default route;
