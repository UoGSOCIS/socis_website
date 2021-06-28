import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
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
        justify="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={gccLogo} alt="Guelph Coding Community Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GCC />
        </Grid>

        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={gwicsLogo} alt="Guelph Women in Computer Science Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GWICS />
        </Grid>

        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={dscLogo} alt="Developer Student Club Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <DSC />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  max-height: 40vh;
  max-width: 25vw;
  min-width: 15vw;
`;

export default ClubPage;
