import React from 'react';

import { AuthProvider } from './auth';
import { LotProvider } from './lot';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <LotProvider>{children}</LotProvider>
  </AuthProvider>
);

export default AppProvider;
