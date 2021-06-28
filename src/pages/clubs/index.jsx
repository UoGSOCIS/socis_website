import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GCC, GWICS, DSC } from './components';
import { ContentWrapper } from '../../components';
import gccLogo from './assets/gcc.png';
import gwicsLogo from './assets/gwics.png';
import dscLogo from './assets/dsc.png';

function ClubPage() {
  return (
    <ContentWrapper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <img src={gccLogo} alt="Guelph Coding Community Logo" style={imgStyle} />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GCC />
        </Grid>

        <Grid item md={4} sm={12}>
          <img src={gwicsLogo} alt="Guelph Women in Computer Science Logo" style={imgStyle} />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GWICS />
        </Grid>

        <Grid item md={4} sm={12}>
          <img src={dscLogo} alt="Developer Student Club Logo" style={imgStyle} />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <DSC />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

const imgStyle = {
  width: '100%',
  borderRadius: '5px',
  maxHeight: '40vh',
};

export default ClubPage;
