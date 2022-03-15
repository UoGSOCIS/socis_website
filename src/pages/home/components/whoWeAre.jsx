import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import image from '../assets/whoWeAre.png';

function WhoWeAre() {
  return (
    <Wrapper id="who-we-are">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12}>
          <Subheader>Who we are</Subheader>
          <Subtext>
            We are the official student society for the
            {' '}
            <Link href="/" target="_blank">School of Computer Science</Link>
            {' '}
            students at the
            {' '}
            <Link href="/" target="_blank">University of Guelph.</Link>
          </Subtext>
        </Grid>
        <GridImage item md={8} sm={12}>
          <Image src={image} alt="students waving" />
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

const Link = styled.a`
  color: black;
  text-decoration: none;
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

export default WhoWeAre;
