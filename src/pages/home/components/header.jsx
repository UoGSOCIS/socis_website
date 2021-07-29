import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import HeaderMessage from './headerMessage';
import logo from '../../../assets/socis_logo.png';

function Header() {
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
          <Image src={logo} alt="SOCIS Logo" className="animate__animated animate__fadeIn" />
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

const Image = styled.img`
  height: 50vh;
  min-height: 250px;
  max-height: 600px;
`;

export default Header;
