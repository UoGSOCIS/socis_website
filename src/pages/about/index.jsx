import React from 'react';
import Container from '@material-ui/core/Container';
import { NavBar } from '../../components';
import Header from './components/header';
import Meeting from './components/meeting';

function AboutPage() {
  return (
    <div className="about">
      <NavBar />
      <Container>
        <Header />
        <Meeting />
      </Container>
    </div>
  );
}

export default AboutPage;
