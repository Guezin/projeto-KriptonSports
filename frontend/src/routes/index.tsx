import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SingUp} />

    <Route path="/profile" isPrivate component={Profile} />
    <Route path="/home" isPrivate component={Home} />
    <Route path="/register" isPrivate component={Register} />
  </Switch>
);

export default Routes;
