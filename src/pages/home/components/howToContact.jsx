import React from 'react';
import styled from 'styled-components';
import { LearnMoreBtn } from '../../../components';

function HowToContact() {
  return (
    <Wrapper>
      <h1>How to contact us...</h1>
      <p>Want to get in touch or learn more about us? Talk to us today or follow us on social media!</p>
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

export default HowToContact;
