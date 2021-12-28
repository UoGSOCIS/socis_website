import React from 'react';
import Route from 'react-router-dom/es/Route';
import {
  AboutPage, ClubPage, ContactPage, NotFoundPage, PolicyPage,
} from '../pages';
import { NavBar } from '../components';

function SubpageRouter() {
  return (
    <>
      <NavBar />
      <Route exact path="/clubs" component={ClubPage} />
      <Route exact path="/policy" component={PolicyPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </>
  );
}

export default SubpageRouter;
