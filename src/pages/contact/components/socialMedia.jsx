import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  faDiscord, faFacebook, faInstagram, faLinkedin, faSlack, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Container from '@material-ui/core/Container';
import { FontAwesomeLink } from '../../../components/icons';

function SocialMedia() {
  return (
    <Container>
      <h2 style={styles.header}>Follow us on social media</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="https://www.facebook.com/groups/UoGSOCIS" icon={faFacebook} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="https://twitter.com/uogsocis" icon={faTwitter} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="https://www.instagram.com/socis.uog" icon={faInstagram} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="https://www.linkedin.com/company/uog-socis/" icon={faLinkedin} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="gryph.slack.com" icon={faSlack} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} style={styles.grid}>
          <FontAwesomeLink href="http://discord.gg/PZ45Jn9MN7" icon={faDiscord} />
        </Grid>
      </Grid>
    </Container>
  );
}

const styles = {
  header: {
    textAlign: 'center',
    margin: '5vh',
    fontSize: '36px',
  },
  grid: {
    textAlign: 'center',
  },
};

export default SocialMedia;
