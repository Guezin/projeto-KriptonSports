import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ProfileSerivce from '@modules/users/services/ProfileService';

class ProfileController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name, surname, email, old_password, password } = request.body;
    const profileService = container.resolve(ProfileSerivce);

    const user = await profileService.execute({
      id,
      name,
      surname,
      email,
      old_password,
      password,
    });

    return response.json(classToClass(user));
  }
}

export default ProfileController;
