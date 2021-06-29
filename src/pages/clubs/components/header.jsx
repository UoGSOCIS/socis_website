import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Title>SOCIS Affiliated Clubs</Title>
      <Subtext>
        Affiliated Clubs refer to University of Guelph Organizations that we partner with and share financial,
        physical, and communal resources to better serve our student body and create new opportunities.
      </Subtext>
    </>
  );
}

const Title = styled.p`
  text-align: center;
  margin-top: 10vh;
  font-size: 54px;
`;

const Subtext = styled.p`
  font-size: 22px;
  text-align: center;
`;

export default Header;
