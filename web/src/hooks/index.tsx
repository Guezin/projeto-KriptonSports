import React from 'react';

import { AuthProvider } from './auth';
import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProductProvider>{children}</ProductProvider>
  </AuthProvider>
);

export default AppProvider;
