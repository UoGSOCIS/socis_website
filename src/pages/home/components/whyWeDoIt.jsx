import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import image from '../../../assets/whatWeDo.png';
import { SubpageText, SubpageTitle } from '../../../components';

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
        <Grid item md={8} sm={12}>
          <Subheader>Why we do it...</Subheader>
          <Subtext>
            We do it because of reasons that will be listed out in this section once i get around to finishing it.
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

export default WhyWeDoIt;
