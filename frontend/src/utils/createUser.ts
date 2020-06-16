import { uuid } from 'uuidv4';

import api from '../services/api';

import IUser from '../dtos/IUserDTO';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const createUser = async ({
  name,
  email,
  password,
}: SignUpFormData): Promise<void> => {
  switch (true) {
    case name === '':
      throw new Error('Preencha todos os campos!');

    case email === '':
      throw new Error('Preencha todos os campos!');

    case password === '':
      throw new Error('Preencha todos os campos!');

    default:
      break;
  }

  const response = await api.get<IUser[]>(`/users`);

  const userExists = response.data.find(user => user.email === email);

  if (userExists) {
    throw new Error('Usuário já existe!');
  }

  await api.post('/users', {
    id: uuid(),
    name,
    email,
    password,
  });
};

export default createUser;
