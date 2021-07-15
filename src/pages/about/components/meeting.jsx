import React from 'react';
import styled from 'styled-components';

function Meeting() {
  return (
    <>
      <Title>Meeting Information</Title>
      <Subtext>
        We meet every Thursday at 5:30pm in Reynolds 0001. Join #socis on
        {' '}
        <Link href="https://gryph.slack.com" rel="noopener noreferrer" target="_blank">GryphSlack</Link>
        {' '}
        or follow our
        {' '}
        <Link href="https://www.instagram.com/socis.uog" rel="noopener noreferrer" target="_blank">Instagram</Link>
        {' '}
        for the latest meeting information.
      </Subtext>
    </>
  );
}

const Title = styled.p`
  text-align: left;
  margin-top: 10vh;
  font-size: 36px;
  margin-bottom: 0;
`;

const Subtext = styled.p`
  font-size: 22px;
  text-align: left;
  marginTop: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export default Meeting;
