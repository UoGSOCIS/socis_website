import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { LearnMoreBtn } from '../../../components';
import image from '../../../assets/placeholder.png';

function WhoWeAre() {
  return (
    <Wrapper>
      <Grid container spacing={5}>
        <Grid item md={9} sm={12}>
          <h1>Who we are...</h1>
          <p>
            Est sint aliquip fugiat non id excepteur esse ad ad enim ad cupidatat
            exercitation commodo. Cupidatat Lorem enim magna ullamco. Eu ex irure
            deserunt ad veniam. Qui non officia Lorem sit ex. Tempor minim ad velit
            ex aliquip ea minim sunt. Nulla sit ut tempor magna.
          </p>
          <LearnMoreBtn href="/about" />
        </Grid>
        <Grid item md={3} sm={12}>
          <Image src={image} alt="placeholder" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

const Image = styled.img`
 max-width: 100%;
`;

export default WhoWeAre;
