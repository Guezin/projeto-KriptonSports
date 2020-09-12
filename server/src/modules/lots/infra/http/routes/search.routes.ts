import { Router } from 'express';

import SearchController from '../controllers/SearchController';

const routes = Router();
const searchController = new SearchController();

routes.get('/:target', searchController.index);

export default routes;
