import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import CreateProduct from '../pages/CreateProduct';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/home" component={Home} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/create-product" component={CreateProduct} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
