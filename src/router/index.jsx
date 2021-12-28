import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage,
} from '../pages';
import SubpageRouter from './subpageRouter';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={SubpageRouter} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
