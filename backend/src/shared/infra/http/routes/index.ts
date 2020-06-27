import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import productRoutes from '@modules/products/infra/http/routes/products.routes';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);
routes.use('/products', productRoutes);

export default routes;
