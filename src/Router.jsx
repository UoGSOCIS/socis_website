import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  AboutPage, ClubPage, ContactPage, HomePage, NotFound, PolicyPage,
} from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/clubs" component={ClubPage} />
        <Route exact path="/policy" component={PolicyPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
