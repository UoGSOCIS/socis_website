import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import image from '../../../assets/whatWeDo.png';

function WhyWeDoIt() {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <Subheader>Why we do it</Subheader>
          <Subtext>
            SOCIS plays a role in uniting students and improving their university experience. We want to empower
            students to innovate, network, and succeed because students are what make the University of Guelph great.
          </Subtext>
        </Grid>
        <GridImage item md={8} sm={12}>
          <Image src={image} alt="teamwork" />
        </GridImage>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  padding: 15vh 10vw;
  background-color: white;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const GridImage = styled(Grid)`
  text-align: center;
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

export default WhyWeDoIt;
