import React from 'react';
import styled from 'styled-components';

function DSC() {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <Name>Developer Student Club (DSC)</Name>
      <Bio>
        Google Developer Student Clubs (GDSC) are community groups for college and university students interested in
        Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing
        as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning
        environment and build solutions for local businesses and their community.
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://www.instagram.com/dsc_uofg" target="_blank" rel="noreferrer">Instagram</Link>
      </div>
    </div>
  );
}

const Name = styled.p`
    font-size: 28px;
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
`;

const Bio = styled.p`
    font-size: 20px;
    line-height: 1.625;
`;

const Link = styled.a`
    text-decoration: none;
    color: #000;
`;

export default DSC;
