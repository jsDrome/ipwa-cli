import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home/Home';

const Routes = () => <Router>
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
</Router>

export default Routes;
