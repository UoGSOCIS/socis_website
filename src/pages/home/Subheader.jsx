import React from 'react';
import { LearnMoreBtn } from '../../components';

function Subheader() {
  return (
    <div className="subheader">
      <h1>Subheading 1</h1>
      <p>Subheading text</p>
      <LearnMoreBtn href="/about" />
    </div>
  );
}

export default Subheader;
