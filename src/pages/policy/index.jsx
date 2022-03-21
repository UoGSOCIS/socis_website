import React from 'react';
import { Header } from './components';
import { ContentWrapper, NavBar } from '../../components';
import Accordian from './components/accordian';

function PolicyPage() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Header />
        <Accordian />
      </ContentWrapper>
    </>
  );
}

export default PolicyPage;
