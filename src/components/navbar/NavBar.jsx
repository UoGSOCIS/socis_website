import React from 'react';
import {
  Toolbar, Typography, Button, AppBar, Hidden,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const navLinks = [
  { title: 'Clubs', path: '/clubs' },
  { title: 'Policy', path: '/policy' },
  { title: 'About', path: '/about-us' },
  { title: 'Contact', path: '/contact' },
];

function NavBar() {
  return (
    <div className="navbar">
      <AppBar position="static" style={{ backgroundColor: '#660000' }}>
        <Toolbar>
          <Typography variant="h6">
            <a href="/" style={styles.homeLink}>SOCIS</a>
          </Typography>
          <Hidden smDown>
            <Links>
              {navLinks.map(({ title, path }) => (
                <Button className={styles.links} color="inherit" href={path}>{title}</Button>
              ))}
            </Links>
          </Hidden>
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
