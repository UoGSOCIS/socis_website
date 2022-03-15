import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import image from '../assets/whatWeDo.png';

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
          <Subheader>What we do</Subheader>
          <Subtext>
            We focus on community building, creating opportunities for students, and advocating for students interests.
            We also run events, organize hackathons, administer clubs, and represent School of Computer Science students.
          </Subtext>
        </Grid>
        <Grid item md={8} sm={12}>
          <Image src={image} alt="students climbing up steps together" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  padding: 10vh 10vw;
  background-color: #F5F5F5;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
  width: 45rem;
  min-width: 25vw;
  min-height: 25vh;
`;

const Subheader = styled.p`
  text-align: left;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.625;
  margin-bottom: 0.5rem;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Subtext = styled.p`
  text-align: left;
  font-size: 24px;
  line-height: 1.625;
`;

export default WhatWeDo;
