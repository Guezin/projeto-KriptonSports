import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'dotenv/config';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
