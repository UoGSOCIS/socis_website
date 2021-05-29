import React from 'react';
import { LearnMoreBtn } from '../../components';

function Subheader2() {
  return (
    <div className="subheader2" style={styles.subheader}>
      <h1>What do we do?</h1>
      <p>
        Sint sunt anim magna non labore incididunt mollit in fugiat dolore et.
        Commodo anim minim occaecat adipisicing mollit.
        Nisi amet nisi duis et aliqua aute non laborum velit.
        Dolore esse Lorem Lorem reprehenderit consequat cillum aute eu cillum.
        Ullamco excepteur nostrud dolore ad mollit enim occaecat et anim tempor
        sint pariatur dolore.
      </p>
      <LearnMoreBtn href="/clubs" />
    </div>
  );
}

const styles = {
  subheader: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    textAlign: 'right',
  },
};

export default Subheader2;
