import React from 'react';
import { FileViewer, Header } from './components';
import { ContentWrapper } from '../../components';

import constitution from './assets/Constitution.pdf';
import clubSpacePolicy from './assets/ClubSpacePolicy.pdf';
import committeeAndStaffPolicy from './assets/CommitteeAndStaffPolicy.pdf';
import makersSpacePolicy from './assets/MakersSpacePolicy.pdf';

function PolicyPage() {
  return (
    <ContentWrapper>
      <Header />
      <h2>Constitution</h2>
      <FileViewer file={constitution} />
      <h2>Club Space Policy</h2>
      <FileViewer file={clubSpacePolicy} />
      <h2>Committee and Staff Policy</h2>
      <FileViewer file={committeeAndStaffPolicy} />
      <h2>Makerspace Policy</h2>
      <FileViewer file={makersSpacePolicy} />
    </ContentWrapper>
  );
}

export default PolicyPage;
