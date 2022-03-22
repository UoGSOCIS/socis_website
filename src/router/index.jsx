import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  ClubPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PolicyPage,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/clubs" element={<ClubPage />} />
        <Route exact path="/policy" element={<PolicyPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
