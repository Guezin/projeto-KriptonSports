import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CreateProduct from '../pages/CreateProduct';
import Products from '../pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/home" component={Home} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/create-product" component={CreateProduct} isPrivate />
    <Route path="/products" component={Products} isPrivate />
  </Switch>
);

export default Routes;
