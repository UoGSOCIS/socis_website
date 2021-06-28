import React from 'react';
import { ContentWrapper } from '../../components';
import { Header, Meeting, Exec } from './components';

function AboutPage() {
  return (
    <ContentWrapper>
      <Header />
      <Meeting />
      <Exec />
    </ContentWrapper>
  );
}

export default AboutPage;
