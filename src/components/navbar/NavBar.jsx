import React from 'react';
import {
  Toolbar, Button, AppBar, Hidden,
} from '@material-ui/core';
import styled from 'styled-components';
import NavDrawer from './navdrawer';
import logo from '../../assets/socis_logo.png';

const navLinks = [
  { title: 'Clubs', path: '/clubs' },
  { title: 'Policy', path: '/policy' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

function NavBar() {
  return (
    <StyledAppBar position="static" style={styles.appBar}>
      <StyledToolbar>
        <a href="/">
          <Image src={logo} alt="SOCIS Logo" />
        </a>
        <WebView smDown>
          <Links>
            {navLinks.map(({ title, path }) => (
              <Button color="inherit" href={path} style={styles.pageLink}>{title}</Button>
            ))}
          </Links>
        </WebView>
        <MobileView mdUp>
          <NavDrawer navLinks={navLinks} />
        </MobileView>
      </StyledToolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  width: 100%;
`;

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between
`;

const Links = styled.div`
`;

const Image = styled.img`
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  height: 4rem;
`;

const WebView = styled(Hidden)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MobileView = styled(Hidden)``;

const styles = {
  homeLink: {
    color: 'white',
    textDecoration: 'none',
  },
  appBar: {
    backgroundColor: '#660000',
    flexDirection: 'row',
    width: '100%',
  },
  pageLink: {
    height: '100%',
  },
};

export default NavBar;
