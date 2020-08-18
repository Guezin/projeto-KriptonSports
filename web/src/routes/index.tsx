import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CreateProduct from '../pages/CreateProduct';
import Products from '../pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/create-product" component={CreateProduct} />
    <Route path="/products" component={Products} />
  </Switch>
);

export default Routes;
