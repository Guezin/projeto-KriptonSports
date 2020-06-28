import React from 'react';

import { AuthProvider } from './auth';
import { DateProvider } from './date';
import { NavProvider } from './nav';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DateProvider>
      <NavProvider>{children}</NavProvider>
    </DateProvider>
  </AuthProvider>
);

export default AppProvider;
