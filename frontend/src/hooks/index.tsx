import React from 'react';

import { AuthProvider } from './auth';
import { DateProvider } from './date';
import { NavProvider } from './nav';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DateProvider>
      <NavProvider>
        <ToastProvider>{children}</ToastProvider>
      </NavProvider>
    </DateProvider>
  </AuthProvider>
);

export default AppProvider;
