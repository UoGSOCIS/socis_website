import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { GCC, GWICS, DSC } from './components';
import { ContentWrapper } from '../../components';

import gccLogo from './assets/gcc.png';
import gwicsLogo from './assets/gwics.png';
import dscLogo from './assets/dsc.png';

function ClubPage() {
  return (
    <ContentWrapper>
      <Header>SOCIS Affiliated Clubs</Header>
      <Subtext>
        Affiliated Clubs refer to University of Guelph Organizations that we partner with and share financial,
        physical, and communal resources to better serve our student body and create new opportunities.
      </Subtext>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={gccLogo} alt="Guelph Coding Community Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GCC />
        </Grid>

        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={gwicsLogo} alt="Guelph Women in Computer Science Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <GWICS />
        </Grid>

        <Grid item md={4} sm={12} style={{ textAlign: 'center' }}>
          <Image src={dscLogo} alt="Developer Student Club Logo" />
        </Grid>
        <Grid item md={8} sm={12} style={{ width: '100%' }}>
          <DSC />
        </Grid>
      </Grid>
      <ContactText>
        Interested in becoming an affiliated club?
        {' '}
        <a href="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact us</a>
        {' '}
        today!
      </ContactText>
    </ContentWrapper>
  );
}

const Header = styled.p`
  text-align: center;
  margin-top: 10vh;
  font-size: 54px;
`;

const Subtext = styled.p`
  font-size: 22px;
  text-align: center;
`;

const ContactText = styled.p`
  margin-top: 10vh;
  margin-bottom: 10vh;
  font-size: 28px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  max-height: 40vh;
  max-width: 250px;
  min-width: 150px;
`;

export default ClubPage;
