import React from 'react';
import styled from 'styled-components';
import { SubpageTitle } from '../../../components';

function Header() {
  return (
    <>
      <SubpageTitle>SOCIS Affiliated Clubs</SubpageTitle>
      <Subtext>
        Affiliated Clubs refer to University of Guelph Organizations that we partner with and share financial,
        physical, and communal resources to better serve our student body and create new opportunities.
      </Subtext>
    </>
  );
}

const Subtext = styled.p`
  font-size: 22px;
  text-align: center;
`;

export default Header;
