import React from 'react';
import { NavBar } from '../../components';
import FileViewer from './fileViewer';

import constitution from '../../assets/Constitution.pdf';
import clubSpacePolicy from '../../assets/ClubSpacePolicy.pdf';
import committeeAndStaffPolicy from '../../assets/CommitteeAndStaffPolicy.pdf';
import makersSpacePolicy from '../../assets/MakersSpacePolicy.pdf';

function PolicyPage() {
  return (
    <div className="policy">
      <NavBar />
      <h1>Policy Page</h1>

      <h2>Constitution</h2>
      <FileViewer file={constitution} />

      <h2>Club Space Policy</h2>
      <FileViewer file={clubSpacePolicy} />

      <h2>Committee and Staff Policy</h2>
      <FileViewer file={committeeAndStaffPolicy} />

      <h2>Makerspace Policy</h2>
      <FileViewer file={makersSpacePolicy} />
    </div>
  );
}

export default PolicyPage;
