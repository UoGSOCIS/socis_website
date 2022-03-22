import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ClubPage, ContactPage,
  HomePage, NotFoundPage, PolicyPage,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/clubs" component={ClubPage} />
        <Route exact path="/policy" component={PolicyPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
