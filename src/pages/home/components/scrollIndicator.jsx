import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DoubleDownIcon from '../../../components/icons/svgIcons';

function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(true), { passive: true });
    return () => window.removeEventListener('scroll', () => setScrolled(false));
  }, []);

  return (
    <ScrollIndicatorWrapper className="animate-flicker">
      {!scrolled
        && (
        <ScrollLink href="#who-we-are">
          <div>
            <ScrollText>Scroll</ScrollText>
          </div>
          <div>
            <DoubleDownIcon />
          </div>
        </ScrollLink>
        )}
    </ScrollIndicatorWrapper>
  );
}

const ScrollIndicatorWrapper = styled.div`
  text-align: center;
  color: white;
  height: 5vh;
  position: relative;
  bottom: 0;
`;

const ScrollLink = styled.a`
  text-decoration: none;
`;

const ScrollText = styled.span`
  font-weight: bolder;
  font-size: 18px;
  color: white;
`;

export default ScrollIndicator;
