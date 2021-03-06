import React from 'react';
import styled from 'styled-components';

function GWICS() {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <Name>Guelph Women in Computer Science (GWICS)</Name>
      <Bio>
        Founded in 2018, Guelph Women in Computer Science (GWiCS) is a student-run organization that seeks to build a
        supportive community for women studying computer science, software engineering and related computing degrees at
        the University of Guelph. This includes cis and trans women as well as non-binary individuals. GWiCS hopes to
        support the inclusion and retention of these groups in our community!
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://gwics.org/" target="_blank" rel="noreferrer">Website</Link>
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

export default GWICS;
