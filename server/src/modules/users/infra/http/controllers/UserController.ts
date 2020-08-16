import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password, manager } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      surname,
      email,
      password,
      manager,
    });

    return response.json(classToClass(user));
  }
}

export default UserController;
