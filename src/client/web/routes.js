import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

const Routes = () => <Router>
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
</Router>

export default Routes;
