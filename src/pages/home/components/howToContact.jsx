import React from 'react';
import styled from 'styled-components';
import { SubpageText, SubpageTitle } from '../../../components';
import LearnMoreBtn from './learnMoreBtn';

function HowToContact() {
  return (
    <Wrapper>
      <SubpageTitle>How to contact us...</SubpageTitle>
      <SubpageText>Want to get in touch or learn more about us? Talk to us today or follow us on social media!</SubpageText>
      <LearnMoreBtn href="/contact" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 10vh 10vw;
  margin-left: auto;
`;

export default HowToContact;
