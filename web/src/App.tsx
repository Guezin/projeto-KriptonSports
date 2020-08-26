import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
