import React from 'react';
import Grid from '@mui/material/Grid';
import {
  faDiscord, faFacebook, faInstagram, faLinkedin, faSlack, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { FaLinks } from '../../../components/icons';

function SocialMedia() {
  return (
    <Container>
      <Title>Follow us on social media</Title>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="https://www.facebook.com/groups/UoGSOCIS" icon={faFacebook} />
        </IconGrid>
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="https://twitter.com/uogsocis" icon={faTwitter} />
        </IconGrid>
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="https://www.instagram.com/socis.uog" icon={faInstagram} />
        </IconGrid>
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="https://www.linkedin.com/company/uog-socis/" icon={faLinkedin} />
        </IconGrid>
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="https://gryph.slack.com" icon={faSlack} />
        </IconGrid>
        <IconGrid item xs={12} sm={6} md={4} lg={2}>
          <FaLinks href="http://discord.gg/PZ45Jn9MN7" icon={faDiscord} />
        </IconGrid>
      </Grid>
    </Container>
  );
}

const Title = styled.p`
  text-align: center;
  margin: 5vh;
  font-size: 36px;
`;

const IconGrid = styled(Grid)`
  text-align: center;
`;

export default SocialMedia;
