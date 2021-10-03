import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import image from '../../../assets/whoWeAre.png';

function WhoWeAre() {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={8} sm={12}>
          <h1>Who we are...</h1>
          <p>
            We are the official student society for the
            {' '}
            <Link href="/" target="_blank">School of Computer Science</Link>
            {' '}
            students at the
            {' '}
            <Link href="/" target="_blank">University of Guelph.</Link>
          </p>
        </Grid>
        <GridImage item md={4} sm={12}>
          <Image src={image} alt="placeholder" />
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
  min-width: 20vw;
  min-height: 20vh;
`;

export default WhoWeAre;
