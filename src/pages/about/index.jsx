import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../../components';
import Header from './components/header';
import Meeting from './components/meeting';
import Exec from './components/exec';

const Wrapper = styled.div`
  padding-top: 2vh;
  padding-bottom: 10vh;
  padding-left: 5vw;
  padding-right: 5vw;
`;

function AboutPage() {
  return (
    <div className="about">
      <NavBar />
      <Wrapper>
        <Header />
        <Meeting />
        <Exec />
      </Wrapper>
    </div>
  );
}

export default AboutPage;
