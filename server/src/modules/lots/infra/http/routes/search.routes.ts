import { Router } from 'express';

import SearchController from '../controllers/SearchController';

const routes = Router();
const searchController = new SearchController();

routes.post('/', searchController.create);

export default routes;
