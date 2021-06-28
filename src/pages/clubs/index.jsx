import React from 'react';
import { GCC, GWICS, DSC } from './components';
import { ContentWrapper } from '../../components';

function ClubPage() {
  return (
    <ContentWrapper>
      <GCC />
      <br />
      <GWICS />
      <br />
      <DSC />
    </ContentWrapper>
  );
}

export default ClubPage;
