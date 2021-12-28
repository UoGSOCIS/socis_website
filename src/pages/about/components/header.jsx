import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Title>We are the Society of Computing and Information Sciences</Title>
      <Subtext>
        The Society of Computing and Information Science (SOCIS) is here to represent all School of Computer
        Science (SOCS) students, this includes those enrolled in computer science, software engineering, the
        general computing degree, and all minors. We represent the students in SOCS council meetings, which has
        far reaching effects on important topics like curriculum, and in the College of Engineering and Physical
        Science Student Council (CEPSSC) meetings.
      </Subtext>
      <Subtext>
        SOCIS also runs events throughout the year including o-week, social nights, community building events,
        weekly Guelph Coding Community (GCC) technical events, as well as a hackathon on Local Hack Day. We also
        represent the University of Guelph at CS games, a collegiate competition that includes challenges from
        all aspects of computing.
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
  text-align: left;
  marginTop: 0;
`;

export default Header;
