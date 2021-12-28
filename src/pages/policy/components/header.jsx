import React from 'react';
import styled from 'styled-components';
import { SubpageTitle, SubpageText } from '../../../components';

function Header() {
  return (
    <>
      <PolicyTitle>Official Documents and Policies</PolicyTitle>
      <Subtext>Last updated May 28, 2021</Subtext>
    </>
  );
}

const PolicyTitle = styled(SubpageTitle)`
  margin-bottom: 0;
`;

const Subtext = styled(SubpageText)`
  font-style: italic;
  marginTop: 0;
`;

export default Header;
