import React from 'react';
import styled from 'styled-components';
import { Header } from './components';
import { ContentWrapper, NavBar } from '../../components';
import Accordian from './components/accordian';

function PolicyPage() {
  return (
    <>
      <NavBar />
      <StyledWrapper>
        <Header />
        <Accordian />
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled(ContentWrapper)`
  padding-bottom: 10rem;
`;

export default PolicyPage;
