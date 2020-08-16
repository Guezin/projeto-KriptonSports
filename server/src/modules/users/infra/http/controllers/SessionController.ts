import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

import CreateSessionService from '@modules/users/services/CreateSessionService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const createSessionService = container.resolve(CreateSessionService);

    const { user, token } = await createSessionService.execute({
      email,
      password,
    });

    return response.json(
      classToClass({
        user,
        token,
      })
    );
  }
}

export default SessionController;
