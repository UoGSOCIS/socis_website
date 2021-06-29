import React from 'react';
import {
  Header, NewAffiliate, Clubs,
} from './components';
import { ContentWrapper } from '../../components';

function ClubPage() {
  return (
    <ContentWrapper>
      <Header />
      <Clubs />
      <NewAffiliate />
    </ContentWrapper>
  );
}

export default ClubPage;
