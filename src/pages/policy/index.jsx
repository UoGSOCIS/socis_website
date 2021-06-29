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
      <FileViewer heading="Constitution" file={constitution} />
      <FileViewer heading="Club Space Policy" file={clubSpacePolicy} />
      <FileViewer heading="Committee and Staff Policy" file={committeeAndStaffPolicy} />
      <FileViewer heading="Makerspace Policy" file={makersSpacePolicy} />
    </ContentWrapper>
  );
}

export default PolicyPage;
