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
        style={{ height: '90%', width: '100%' }}
      >
        <LogoGrid item md={4} sm={12}>
          <Image src={logo} alt="SOCIS Logo" className="animate__animated animate__fadeIn" />
        </LogoGrid>
        <Grid item md={8} sm={12}>
          <HeaderMessage />
        </Grid>
      </Grid>
    </Banner>
  );
}

const Banner = styled.div`
  background-color: #660000;
  height: 100%;
`;

const LogoGrid = styled(Grid)`
  text-align: center;
`;

const Image = styled.img`
  height: 50vh;
`;

export default Header;
