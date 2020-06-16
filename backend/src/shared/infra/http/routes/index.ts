import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/users', userRoutes);

export default routes;
