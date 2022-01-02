import React from 'react';
import styled from 'styled-components';

function Makerspace() {
  return (
    <>
      <Name>Makerspace</Name>
      <Bio>
        The Makerspace is a place for all computing and engineering students to bring their innovative project ideas to
        life. We offer you the facility to rent out hardware inventory items and access various in-house services at
        zero cost. Come join us and work with your peers in a collaborative environment to develop amazing projects!
      </Bio>
      {/* <div style={{textAlign: 'center'}}> */}
      {/*  <Link href="https://www.instagram.com/gcc_uog" target="_blank" rel="noreferrer">Instagram</Link> */}
      {/* </div> */}
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

// const Link = styled.a`
//     text-decoration: none;
//     color: #000;
// `;

export default Makerspace;
