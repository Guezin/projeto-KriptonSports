interface IRequest {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

class ProfileService {
  public async execute({
    name,
    email,
    old_password,
    password,
    password_confirmation,
  }: IRequest): Promise<void> {}
}

export default ProfileService;
