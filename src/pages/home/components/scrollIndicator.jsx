import React from 'react';
import styled from 'styled-components';
import DoubleDownIcon from '../../../components/icons/svgIcons';

function ScrollIndicator() {
  return (
    <ScrollIndicatorWrapper>
      <div>
        <span>Scroll</span>
      </div>
      <div>
        <DoubleDownIcon />
      </div>
    </ScrollIndicatorWrapper>
  );
}

const ScrollIndicatorWrapper = styled.div`
  text-align: center;
  color: white;
  padding-bottom: 2rem;
`;

export default ScrollIndicator;
