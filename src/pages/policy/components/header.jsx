import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Title>Official Documents and Policies</Title>
      <Subtext>Last updated May 28, 2021</Subtext>
    </>
  );
}

const Title = styled.p`
  text-align: center;
  margin-top: 10vh;
  font-size: 54px;
  margin-bottom: 0;
`;

const Subtext = styled.p`
  font-size: 22px;
  text-align: center;
  font-style: italic;
  marginTop: 0;
`;

export default Header;
