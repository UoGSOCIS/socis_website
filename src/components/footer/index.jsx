import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <p>
        SOCIS supports open source! Contribute to this site on
        {' '}
        <Link href="https://github.com/UoGSOCIS/socis_website">GitHub</Link>
        .
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background: #465052;
  position: absolute;
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;
  bottom: 0;
  width: 100%;
  display: block;
  text-align: center;
  color: white;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
