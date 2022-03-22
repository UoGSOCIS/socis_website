import React from 'react';
import styled from 'styled-components';
import { SubpageTitle } from '../../../components';

function Header() {
  return (
    <div style={{ paddingBottom: '3rem' }}>
      <SubpageTitle>SOCIS Affiliated Clubs</SubpageTitle>
      <Subtext>
        Affiliated Clubs refer to University of Guelph Organizations that we partner with and share financial,
        physical, and communal resources to better serve our student body.
      </Subtext>
    </div>
  );
}

const Subtext = styled.p`
  font-size: 24px;
  text-align: center;
  line-height: 1.625;
  padding-left: 20rem;
  padding-right: 20rem;
  @media (max-width: 1100px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Header;
