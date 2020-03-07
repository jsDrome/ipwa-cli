import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home/Home';
import Post from 'Pages/Post/Post';

const HomeComponent = window.isUserLoggedIn ? Post : Home;

const Routes = () => <Router>
  <Switch>
    <Route path="/" component={HomeComponent} />
  </Switch>
</Router>

export default Routes;
