import React from 'react';
import Grid from '@material-ui/core/Grid';
import { LearnMoreBtn, useViewport } from '../../components';

function Subheader2() {
  const { width } = useViewport();
  const breakpoint = 959;

  return (
    <div
      className="subheader2"
      style={
      width > breakpoint
        ? styles.subheader
        : styles.subheaderMobile
      }
    >
      <h1>What do we do?</h1>
      <Grid container spacing={5}>
        <Grid item md={3} sm={12}>
          <img src="placeholder.png" alt="placeholder" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item md={9} sm={12}>
          <p>
            Sint sunt anim magna non labore incididunt mollit in fugiat dolore et.
            Commodo anim minim occaecat adipisicing mollit.
            Nisi amet nisi duis et aliqua aute non laborum velit.
            Dolore esse Lorem Lorem reprehenderit consequat cillum aute eu cillum.
            Ullamco excepteur nostrud dolore ad mollit enim occaecat et anim tempor
            sint pariatur dolore.
          </p>
        </Grid>
      </Grid>
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
  subheaderMobile: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    textAlign: 'center',
  },
};

export default Subheader2;
