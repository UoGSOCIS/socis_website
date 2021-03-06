import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import GCC from './gcc';
import GWICS from './gwics';
import DSC from './dsc';
import Makerspace from './makerspace';
import {
  GCCLogo, DSCLogo, GWICSLogo, MakerspaceLogo,
} from '../assets';

function Clubs() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <LogoGrid item md={4} sm={12}>
        <GCCLogo alt="Guelph Coding Community Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <GCC />
      </Grid>

      <LogoGrid item md={4} sm={12}>
        <GWICSLogo alt="Guelph Women in Computer Science Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <GWICS />
      </Grid>

      <LogoGrid item md={4} sm={12}>
        <DSCLogo alt="Developer Student Club Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <DSC />
      </Grid>

      <LogoGrid item md={4} sm={12}>
        <MakerspaceLogo alt="Developer Student Club Logo" />
      </LogoGrid>
      <Grid item md={8} sm={12}>
        <Makerspace />
      </Grid>

    </Grid>
  );
}

const LogoGrid = styled(Grid)`
  text-align: center;
`;

export default Clubs;
