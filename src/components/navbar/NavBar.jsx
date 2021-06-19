import React from 'react';
import {
  Toolbar, Typography, Button, AppBar, Hidden,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import NavDrawer from './navdrawer';

const navLinks = [
  { title: 'Clubs', path: '/clubs' },
  { title: 'Policy', path: '/policy' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

function NavBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#660000' }}>
      <Toolbar>
        <Hidden smDown>
          <Typography variant="h6">
            <a href="/" style={styles.homeLink}>SOCIS</a>
          </Typography>
          <Links>
            {navLinks.map(({ title, path }) => (
              <Button color="inherit" href={path}>{title}</Button>
            ))}
          </Links>
        </Hidden>
        <Hidden mdUp>
          <NavDrawer navLinks={navLinks} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

const Links = styled.div`
  margin-left: 'auto';
  margin-right: -12;
`;

const styles = {
  homeLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
