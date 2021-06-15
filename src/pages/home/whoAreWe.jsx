import React from 'react';
import Grid from '@material-ui/core/Grid';
import { LearnMoreBtn, useViewport } from '../../components';

function Subheader() {
  const { width } = useViewport();
  const breakpoint = 959;

  return (
    <div
      className="subheader"
      style={
      width > breakpoint
        ? { textAlign: 'left' }
        : { textAlign: 'center' }
    }
    >
      <Grid container spacing={5}>
        <Grid item md={9} sm={12}>
          <h1>Who are we?</h1>
          <p>
            Est sint aliquip fugiat non id excepteur esse ad ad enim ad cupidatat
            exercitation commodo. Cupidatat Lorem enim magna ullamco. Eu ex irure
            deserunt ad veniam. Qui non officia Lorem sit ex. Tempor minim ad velit
            ex aliquip ea minim sunt. Nulla sit ut tempor magna.
          </p>
        </Grid>
        <Grid item md={3} sm={12}>
          <img src="placeholder.png" alt="placeholder" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <LearnMoreBtn href="/about" />
    </div>
  );
}

export default Subheader;
