import React from 'react';
import styled from 'styled-components';

function GWICS() {
  return (
    <>
      <Name>Guelph Women in Computer Science (GWICS)</Name>
      <Bio>
        This should be a description of the Guelph Coding Community that includes
        information about the Guelph Coding Community such as what they do, a bit
        about their history, some of their events, other filler information because I
        dont want to think about what to write here. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus tempus congue libero ac tempor. Integer pretium at nunc et
        vulputate. Pellentesque fringilla sagittis quam.
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://gwics.org/" target="_blank" rel="noreferrer">Website</Link>
      </div>
    </>
  );
}

const Name = styled.p`
    font-size: 28px;
    text-align: center;
    margin-top: 10px;
`;

const Bio = styled.p`
    font-size: 18px;
    line-height: 1.4;
`;

const Link = styled.a`
    text-decoration: none;
    color: #000;
`;

export default GWICS;
