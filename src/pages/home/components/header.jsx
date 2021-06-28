import React from 'react';
import Grid from '@material-ui/core/Grid';
import HeaderMessage from './headerMessage';
import logo from '../../../assets/socis_logo.png';

function Header() {
  return (
    <div className="homeHeading" style={styles.banner}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '100%', width: '100%' }}
      >
        <Grid item md={4} sm={12}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <img src={logo} alt="SOCIS Logo" className="animate__animated animate__fadeIn" style={{ height: '50vh' }} />
          </div>
        </Grid>
        <Grid item md={8} sm={12}>
          <HeaderMessage />
        </Grid>
      </Grid>
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
