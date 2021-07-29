import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  HomePage, NotFoundPage,
} from '../pages';
import SubpageRouter from './subpageRouter';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/" component={SubpageRouter} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
