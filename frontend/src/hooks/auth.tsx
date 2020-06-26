import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

interface ICredencialsUser {
  email: string;
  password: string;
}

interface IAuthContextData {
  signIn(credencials: ICredencialsUser): Promise<void>;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    setData(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
