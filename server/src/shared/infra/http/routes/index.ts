import { Router } from 'express';

import sessionsRoutes from '@modules/users/infra/http/routes/session.routes';
import userRoutes from '@modules/users/infra/http/routes/user.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import productRoutes from '@modules/products/infra/http/routes/product.routes';
import lotRoutes from '@modules/products/infra/http/routes/lot.routes';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);
routes.use('/profile', ensureAuthenticated, profileRoutes);
routes.use('/products', ensureAuthenticated, productRoutes);
routes.use('/lots', ensureAuthenticated, lotRoutes);

export default routes;
