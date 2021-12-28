import React from 'react';
import {
  Header, NewAffiliate, Clubs,
} from './components';
import { ContentWrapper, NavBar } from '../../components';

function ClubPage() {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Header />
        <Clubs />
        <NewAffiliate />
      </ContentWrapper>
    </>
  );
}

export default ClubPage;
