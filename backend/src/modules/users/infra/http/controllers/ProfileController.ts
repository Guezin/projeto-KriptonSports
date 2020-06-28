import { Request, Response } from 'express';

class ProfileController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      old_password,
      password,
      password_confirmation,
    } = request.body;

    return response.json({
      name,
      email,
      old_password,
      password,
      password_confirmation,
    });
  }
}

export default ProfileController;
