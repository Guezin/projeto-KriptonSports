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

interface IUser {
  name: string;
  email: string;
}

interface IAuthProviderProps {
  user: IUser;
  signIn: (credencials: ISignInProps) => Promise<void>;
  signUp: (dataUser: ISignUpProps) => Promise<void>;
}

interface IResponseAPIPost {
  token: string;
  user: IUser;
}

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  // const [token, setToken] = useState('');

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }: ISignInProps) => {
      try {
        const { data } = await api.post<IResponseAPIPost>('/sessions', {
          email,
          password,
        });

        api.defaults.headers.authorization = `Bearer ${data.token}`;

        setUser(data.user);
        // setToken(data.token);

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

  return (
    <AuthContext.Provider value={{ user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthProviderProps => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
