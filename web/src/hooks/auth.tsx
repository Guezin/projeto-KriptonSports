import React, { useContext, createContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext<IAuthProviderProps>({} as IAuthProviderProps);

interface ISignInProps {
  email: string;
  password: string;
}

interface ISignUpProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface IUpdateUserProps {
  name: string;
  surname: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

interface IUser {
  name: string;
  surname: string;
  email: string;
}

interface IAuthProviderProps {
  user: IUser;
  signIn: (credencials: ISignInProps) => Promise<void>;
  signUp: (dataUser: ISignUpProps) => Promise<void>;
  updateUser: (dataUser: IUpdateUserProps) => Promise<void>;
}

interface IResponseAPIPost {
  token: string;
  user: IUser;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IResponseAPIPost>(() => {
    const user = localStorage.getItem('@KriptonSports:user');
    const token = localStorage.getItem('@KriptonSports:token');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IResponseAPIPost;
  });

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }: ISignInProps) => {
      try {
        const { data } = await api.post<IResponseAPIPost>('/sessions', {
          email,
          password,
        });

        localStorage.setItem('@KriptonSports:user', JSON.stringify(data.user));
        localStorage.setItem('@KriptonSports:token', data.token);

        api.defaults.headers.authorization = `Bearer ${data.token}`;

        setData(data);

        history.push('/home');
      } catch {
        alert('Erro ao fazer login, cheque suas credencias!');
      }
    },
    [history]
  );

  const signUp = useCallback(
    async ({ name, surname, email, password }: ISignUpProps) => {
      try {
        await api.post('/users', {
          name,
          surname,
          email,
          password,
        });

        alert('Cadastro realizado com sucesso, tente fazer logon!');
        history.push('/');
      } catch {
        alert('Erro ao criar cadastro, verifique seus dados!');
      }
    },
    [history]
  );

  const updateUser = useCallback(
    async ({
      name,
      surname,
      email,
      old_password,
      password,
      password_confirmation,
    }: IUpdateUserProps) => {
      const userDataToUpdate = Object.assign(
        {
          name,
          surname,
          email,
        },
        old_password
          ? {
              old_password,
              password,
              password_confirmation,
            }
          : {}
      );

      try {
        const response = await api.put<IUser>('/profile', userDataToUpdate);

        localStorage.setItem(
          '@KriptonSports:user',
          JSON.stringify(response.data)
        );

        setData({
          token: data.token,
          user: response.data,
        });

        if (password) {
          history.push('/');
        }

        alert('Atualização de perfil realizada com sucesso!');
      } catch {
        alert('Erro ao atualizar perfil, verifique seus dados!');
      }
    },
    [data.token, history]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthProviderProps => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
