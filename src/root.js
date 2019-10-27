// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import './index.css';
import Welcome from './pages/Welcome';
import PageNotFound from './pages/pageNotFound.js';

const root = (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route component={PageNotFound} />
  </Switch>
);

export default root;
