import React, { useContext, createContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext<IAuthProviderProps>({} as IAuthProviderProps);

interface ISignInProps {
  email: string;
  password: string;
}

interface IUser {
  name: string;
  email: string;
}

interface IAuthProviderProps {
  user: IUser;
  token: string;
  signIn: (credencials: ISignInProps) => Promise<void>;
}

interface IResponse {
  token: string;
  user: IUser;
}

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState('');

  const history = useHistory();

  const signIn = useCallback(
    async ({ email, password }: ISignInProps) => {
      try {
        const { data } = await api.post<IResponse>('/sessions', {
          email,
          password,
        });

        setUser(data.user);
        setToken(data.token);

        history.push('/home');
      } catch {
        alert('Erro ao fazer login, cheque suas credencias!');
      }
    },
    [history]
  );

  return (
    <AuthContext.Provider value={{ user, token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthProviderProps => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
