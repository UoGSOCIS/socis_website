import React from 'react';
import styled from 'styled-components';
import LearnMoreBtn from './learnMoreBtn';

function HowToContact() {
  return (
    <Wrapper>
      <Subheader>How to contact us</Subheader>
      <Subtext>Want to get in touch or learn more about us? Talk to us today or follow us on social media!</Subtext>
      <LearnMoreBtn href="/contact" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 10vh 15vw;
  margin-left: auto;
`;

const Subheader = styled.p`
  text-align: center;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.625;
  margin-bottom: 0.5rem;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Subtext = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 1.625;
  margin-bottom: 0.5rem;
`;

export default HowToContact;
