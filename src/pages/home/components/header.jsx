import React, { useEffect, useState } from 'react';
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
      <BannerContainer>
        <LogoContainer>
          <SOCISLogo alt="SOCIS Logo" className="animate__animated animate__fadeIn" height={logoHeight} width={logoWidth} />
        </LogoContainer>
        <div>
          <HeaderMessage />
        </div>
      </BannerContainer>
      <ScrollIndicator />
    </Banner>
  );
}

const Banner = styled.div`
  background-color: #660000;
  height: 100%;
  padding: 0 2vw;
`;

const BannerContainer = styled.div`
  height: 86%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  text-align: center;
  width: 56rem;
`;

export default Header;
