import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { LearnMoreBtn } from '../../../components';
import image from '../../../assets/placeholder.png';

function WhatWeDo() {
  return (
    <Wrapper>
      <h1>What we do...</h1>
      <Grid container spacing={5}>
        <Grid item md={3} sm={12}>
          <Image src={image} alt="placeholder" />
        </Grid>
        <Grid item md={9} sm={12}>
          <p>
            Sint sunt anim magna non labore incididunt mollit in fugiat dolore et.
            Commodo anim minim occaecat adipisicing mollit.
            Nisi amet nisi duis et aliqua aute non laborum velit.
            Dolore esse Lorem Lorem reprehenderit consequat cillum aute eu cillum.
            Ullamco excepteur nostrud dolore ad mollit enim occaecat et anim tempor
            sint pariatur dolore.
          </p>
          <LearnMoreBtn href="/clubs" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 8vh;
  padding-bottom: 8vh;
  text-align: right;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
 max-width: 100%;
`;

export default WhatWeDo;
