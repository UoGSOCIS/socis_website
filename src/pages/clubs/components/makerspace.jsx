import React from 'react';
import styled from 'styled-components';

function Makerspace() {
  return (
    <div>
      <Name>Makerspace</Name>
      <Bio>
        The Makerspace is a place for all computing and engineering students to bring their innovative project ideas to
        life. We offer you the facility to rent out hardware inventory items and access various in-house services at
        zero cost. Come join us and work with your peers in a collaborative environment to develop amazing projects!
      </Bio>
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

export default Makerspace;
