import React from 'react';
import { ContentWrapper } from '../../components';
import {
  Header, Meeting, Exec, Staff,
} from './components';

function AboutPage() {
  return (
    <ContentWrapper>
      <Header />
      <Meeting />
      <Exec />
      <Staff />
    </ContentWrapper>
  );
}

export default AboutPage;
