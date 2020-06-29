import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/session.routes';
import productRoutes from '@modules/products/infra/http/routes/product.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);
routes.use('/products', ensureAuthenticated, productRoutes);
routes.use('/profile', ensureAuthenticated, profileRoutes);

export default routes;
