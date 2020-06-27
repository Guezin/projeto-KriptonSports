import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

import validateSignInUser from '../utils/validateSignInUser';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

interface IUser {
  name: string;
}

interface ICredencialsUser {
  email: string;
  password: string;
}

interface IAuthState {
  user: IUser;
  token: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credencials: ICredencialsUser): Promise<void>;
  signOut(): void;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@KriptonSports:token');
    const user = localStorage.getItem('@KriptonSports:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    if (process.env.REACT_APP_DEV_SERVER === 'test') {
      const response = await validateSignInUser({
        email,
        password,
      });

      if (!response) {
        throw new Error('Credenciais email/senha incorretos, tente novamente!');
      }

      return setData(response);
    }

    const { user, token } = data;

    localStorage.setItem('@KriptonSports:token', token);
    localStorage.setItem('@KriptonSports:user', JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@KriptonSports:token');
    localStorage.removeItem('@KriptonSports:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
