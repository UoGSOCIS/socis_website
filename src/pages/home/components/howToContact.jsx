import React from 'react';
import styled from 'styled-components';
import { LearnMoreBtn } from '../../../components';

function HowToContact() {
  return (
    <Wrapper>
      <Subheader>How to contact us...</Subheader>
      <Subtext>Want to get in touch or learn more about us? Talk to us today or follow us on social media!</Subtext>
      <LearnMoreBtn href="/contact" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 5vh;
  margin-left: auto;
`;

const Subheader = styled.h1`
  font-size: 56px;
`;

const Subtext = styled.p`
  font-size: 24px;
`;

export default HowToContact;
