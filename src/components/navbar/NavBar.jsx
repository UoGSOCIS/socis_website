import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

function NavBar() {
  return (
    <div className="navbar">
      <AppBar position="static" style={{ backgroundColor: '#660000' }}>
        <Toolbar>
          <Typography variant="h6">
            <a href="/" style={styles.homeLink}>SOCIS</a>
          </Typography>
          <Links>
            <Button className={styles.links} color="inherit" href="/clubs">Clubs</Button>
            <Button className={styles.links} color="inherit" href="/policy">Policy</Button>
            <Button className={styles.links} color="inherit" href="/about">About</Button>
            <Button className={styles.links} color="inherit" href="/contact">Contact</Button>
          </Links>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Links = styled.div`
  marginLeft: 'auto';
  marginRight: -12;
`;

const styles = {
  homeLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
