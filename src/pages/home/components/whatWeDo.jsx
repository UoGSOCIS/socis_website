import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import image from '../../../assets/whatWeDo.png';

function WhatWeDo() {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <Image src={image} alt="introduction" />
        </Grid>
        <Grid item md={8} sm={12}>
          <Subheader>What we do...</Subheader>
          <Subtext>
            SOCIS focuses on community building, creating opportunities for students, and advocating for students interests.
            We also run events, organize hackathons, administer clubs, and represent School of Computer Science students.
          </Subtext>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  padding-top: 10vh;
  padding-bottom: 10vh;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  min-width: 25vw;
  min-height: 25vh;
`;

const Subheader = styled.h1`
  font-size: 56px;
`;

const Subtext = styled.p`
  font-size: 24px;
`;

export default WhatWeDo;
