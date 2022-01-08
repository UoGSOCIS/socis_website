import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import image from '../../../assets/whoWeAre.png';
import { SubpageText, SubpageTitle } from '../../../components';

function WhoWeAre() {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={8} sm={12}>
          <Subheader>Who we are...</Subheader>
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
        <GridImage item md={4} sm={12}>
          <Image src={image} alt="teamwork" />
        </GridImage>
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

const GridImage = styled(Grid)`
  text-align: center;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  max-width: 100%;
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

export default WhoWeAre;
