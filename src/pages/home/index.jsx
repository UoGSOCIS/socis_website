import React from 'react';
import styled from 'styled-components';
import {
  Header, WhoWeAre, WhatWeDo, HowToContact,
} from './components';

function HomePage() {
  return (
    <HomeWrapper>
      <Banner>
        <Header />
      </Banner>
      <HomeSubheaders>
        <WhoWeAre />
        <WhatWeDo />
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
  background-color: #F5F5F5;
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 20px;
`;

export default HomePage;
