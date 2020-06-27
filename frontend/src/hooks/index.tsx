import React from 'react';

import { AuthProvider } from './auth';
import { DateProvider } from './date';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DateProvider>{children}</DateProvider>
  </AuthProvider>
);

export default AppProvider;
