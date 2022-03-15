import React from 'react';
import styled from 'styled-components';
import {
  Header, WhoWeAre, WhatWeDo, HowToContact, WhyWeDoIt,
} from './components';
import { NavBar } from '../../components';

function HomePage() {
  return (
    <HomeWrapper>
      <Banner>
        <NavBar home />
        <Header />
      </Banner>
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
  height: 70vh;
  background-color: #660000;
`;

const HomeSubheaders = styled.div`
  padding-bottom: 10vh;
  font-size: 20px;
`;

export default HomePage;
