import React from 'react';
import { NavBar, ContentWrapper } from '../../components';
import Header from './components/header';
import Meeting from './components/meeting';
import Exec from './components/exec';

function AboutPage() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Header />
        <Meeting />
        <Exec />
      </ContentWrapper>
    </>
  );
}

export default AboutPage;
