import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/user.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/session.routes';
import productRoutes from '@modules/products/infra/http/routes/product.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);
routes.use('/products', productRoutes);
routes.use('/profile', profileRoutes);

export default routes;
