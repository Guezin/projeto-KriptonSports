import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import CreateProduct from '../pages/CreateProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/home" component={Home} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/create-product" component={CreateProduct} />
  </Switch>
);

export default Routes;
