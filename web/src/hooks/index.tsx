import React from 'react';

import { AuthProvider } from './auth';
import { LotProvider } from './lot';
import { FilterProvider } from './filter';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <LotProvider>
      <FilterProvider>{children}</FilterProvider>
    </LotProvider>
  </AuthProvider>
);

export default AppProvider;
