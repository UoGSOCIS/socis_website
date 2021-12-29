import React from 'react';
import { ContentWrapper, NavBar } from '../../components';
import {
  Header, Meeting, Exec, Staff,
} from './components';

function AboutPage() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Header />
        <Meeting />
        <Exec />
        <Staff />
      </ContentWrapper>
    </>
  );
}

export default AboutPage;
