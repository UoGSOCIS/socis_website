import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../../components';

function HeaderMessage() {
  const { width } = useViewport();
  const breakpoint = 676;

  return (
    <Message>
      {
        width > breakpoint
          ? 'We are the Society of Computing and Information Science'
          : 'We are SOCIS'
      }
    </Message>
  );
}

const Message = styled.p`
  color: white;
  text-align: left;
  font-size: 76px;
  margin-top: 0;
  @media (max-width: 1279px) {
    text-align: center;
  }
`;

export default HeaderMessage;
