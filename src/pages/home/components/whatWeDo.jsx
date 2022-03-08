import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import image from '../../../assets/whatWeDo.png';
import { SubpageText, SubpageTitle } from '../../../components';

function WhatWeDo() {
  return (
    <Wrapper>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <Subheader>What we do...</Subheader>
          <Subtext>
            SOCIS focuses on community building, creating opportunities for students, and advocating for students interests.
            We also run events, organize hackathons, administer clubs, and represent School of Computer Science students.
          </Subtext>
        </Grid>
        <Grid item md={8} sm={12}>
          <Image src={image} alt="introduction" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  padding: 15vh 10vw;
  background-color: #F5F5F5;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 60rem;
  min-width: 25vw;
  min-height: 25vh;
`;

const Subheader = styled(SubpageTitle)`
  font-size: 56px;
  text-align: left;
`;

const Subtext = styled(SubpageText)`
  font-size: 24px;
  text-align: left;
`;

export default WhatWeDo;
