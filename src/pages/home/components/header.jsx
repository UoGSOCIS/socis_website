import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import HeaderMessage from './headerMessage';
import SOCIS from '../../../assets/socis';

function Header() {
  const logoHeight = '55vh';

  return (
    <Banner>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '95%', width: '100%' }}
      >
        <LogoGrid item lg={4} md={12}>
          <SOCIS alt="SOCIS Logo" className="animate__animated animate__fadeIn" height={logoHeight} />
        </LogoGrid>
        <Grid item lg={8} md={12}>
          <HeaderMessage />
        </Grid>
      </Grid>
    </Banner>
  );
}

const Banner = styled.div`
  background-color: #660000;
  height: 100%;
  padding-left: 3vw;
  padding-right: 3vw;
`;

const LogoGrid = styled(Grid)`
  text-align: center;
`;

export default Header;
