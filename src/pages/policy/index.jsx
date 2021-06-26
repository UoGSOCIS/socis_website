import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './header';
import FileViewer from './fileViewer';

import constitution from '../../assets/Constitution.pdf';
import clubSpacePolicy from '../../assets/ClubSpacePolicy.pdf';
import committeeAndStaffPolicy from '../../assets/CommitteeAndStaffPolicy.pdf';
import makersSpacePolicy from '../../assets/MakersSpacePolicy.pdf';

function PolicyPage() {
  return (
    <>
      <Container>
        <Header />
        <h2>Constitution</h2>
        <FileViewer file={constitution} />
        <h2>Club Space Policy</h2>
        <FileViewer file={clubSpacePolicy} />
        <h2>Committee and Staff Policy</h2>
        <FileViewer file={committeeAndStaffPolicy} />
        <h2>Makerspace Policy</h2>
        <FileViewer file={makersSpacePolicy} />
      </Container>
    </>
  );
}

export default PolicyPage;
