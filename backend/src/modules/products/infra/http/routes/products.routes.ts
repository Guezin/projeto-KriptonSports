import { Router } from 'express';

import ProductController from '../controllers/ProductController';

const route = Router();
const productController = new ProductController();

route.post('/', productController.create);

export default route;
