import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HeaderMessage from './HeaderMessage';

function Header() {
  return (
    <div className="homeHeading" style={styles.banner}>
      <Box
        display="flex"
        width="100%"
        height="85%"
      >
        <Box m="auto">
          <Grid container>
            <Grid item md={4}>
              <Container>
                <img src="socisWhite.png" alt="Socis logo" style={{ marginLeft: '20%' }} />
              </Container>
            </Grid>
            <Grid item md={8}>
              <HeaderMessage />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

const styles = {
  banner: {
    backgroundColor: '#660000',
    height: '100%',
  },
};

export default Header;
