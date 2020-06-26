import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SingUp} />

    <Route path="/profile" component={Profile} />
    <Route path="/home" component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
