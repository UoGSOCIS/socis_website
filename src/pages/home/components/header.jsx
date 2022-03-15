import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import HeaderMessage from './headerMessage';
import SOCISLogo from '../../../assets/socisLogo';
import { useViewport } from '../../../components';
import ScrollIndicator from './scrollIndicator';

function Header() {
  const breakpoint = 680; // 679.467, default image width
  const logoHeight = '50vh';
  let logoWidth = useState('679.467');
  const { width } = useViewport();

  useEffect(() => {
    if (width < breakpoint) {
      logoWidth = width;
    } else {
      logoWidth = '679.467';
    }
  }, [width]);

  return (
    <Banner>
      <BannerGrid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <LogoGrid item lg={4} md={12}>
          <SOCISLogo alt="SOCIS Logo" className="animate__animated animate__fadeIn" height={logoHeight} width={logoWidth} />
        </LogoGrid>
        <MessageGrid item lg={8} md={12}>
          <HeaderMessage />
        </MessageGrid>
      </BannerGrid>
      <ScrollIndicator />
    </Banner>
  );
}

const Banner = styled.div`
  background-color: #660000;
  height: 100%;
  padding: 0 2vw;
`;

const BannerGrid = styled(Grid)`
  height: 85%;
  width: 100%;
`;

const LogoGrid = styled(Grid)`
  text-align: center;
  width: 100%;
`;

const MessageGrid = styled(Grid)`
  width: 100%;
`;

export default Header;
