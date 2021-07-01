import React from 'react';
import styled from 'styled-components';
import Router from './router';
import { Footer, NavBar } from './components';

function App() {
  return (
    <Wrapper>
      <NavBar />
      <Router />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #F5F5F5;
`;

export default App;
