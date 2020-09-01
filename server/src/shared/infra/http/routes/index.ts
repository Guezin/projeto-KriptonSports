import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import sessionsRoutes from '@modules/users/infra/http/routes/session.routes';
import userRoutes from '@modules/users/infra/http/routes/user.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import forgotPassword from '@modules/users/infra/http/routes/forgotPassword.routes';
import resetPassword from '@modules/users/infra/http/routes/resetPassword.routes';
import lotRoutes from '@modules/lots/infra/http/routes/lot.routes';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);
routes.use('/profile', ensureAuthenticated, profileRoutes);
routes.use('/forgot-password', ensureAuthenticated, forgotPassword);
routes.use('/reset-password', ensureAuthenticated, resetPassword);
routes.use('/lots', ensureAuthenticated, lotRoutes);

export default routes;
