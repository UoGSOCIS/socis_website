import React from 'react';
import styled from 'styled-components';
import DoubleDownIcon from '../../../components/icons/svgIcons';

function ScrollIndicator() {
  return (
    <ScrollIndicatorWrapper>
      <ScrollLink href="#who-we-are">
        <div>
          <ScrollText>Scroll</ScrollText>
        </div>
        <div>
          <DoubleDownIcon />
        </div>
      </ScrollLink>
    </ScrollIndicatorWrapper>
  );
}

const ScrollIndicatorWrapper = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 2rem;
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
