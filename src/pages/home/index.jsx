import React from 'react';
import styled from 'styled-components';
import {
  Header, WhoWeAre, WhatWeDo, HowToContact, WhyWeDoIt,
} from './components';
import { NavBar } from '../../components';
import ScrollIndicator from './components/scrollIndicator';

function HomePage() {
  return (
    <HomeWrapper>
      <Banner>
        <NavBar home />
        <Header />
      </Banner>
      <ScrollIndicator />
      <HomeSubheaders>
        <WhoWeAre />
        <WhatWeDo />
        <WhyWeDoIt />
        <HowToContact />
      </HomeSubheaders>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  padding-bottom: 5vh;
`;

const Banner = styled.div`
  height: 100vh;
`;

const HomeSubheaders = styled.div`
  padding-bottom: 10vh;
  font-size: 20px;
`;

export default HomePage;
