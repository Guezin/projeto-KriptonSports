import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

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
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  const signIn = useCallback(async ({ email, password }) => {
    const { data } = await api.post('/sessions', {
      email,
      password,
    });

    const { user, token } = data;

    setData({ user, token });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
