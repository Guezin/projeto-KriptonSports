import api from '../services/api';

import IUser from '../dtos/IUserDTO';

interface SignInFormData {
  email: string;
  password: string;
}

const validateSignInUser = async ({
  email,
  password,
}: SignInFormData): Promise<IUser | undefined> => {
  const { data } = await api.get<IUser[]>('/users');

  const user = data.find(_user => _user.email === email);

  if (!user) {
    throw new Error('Usuário não encontrado na base de dados!');
  }

  if (user?.password !== password) {
    throw new Error('Credenciais email/senha estão incorretos!');
  }

  return user;
};

export default validateSignInUser;
