import React, { useState } from 'react';
import {
  List, ListItem, ListItemText, IconButton, SwipeableDrawer,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function NavDrawer({ navLinks }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (!(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      setOpen(isOpen);
    }
  };

  const navDrawerList = () => (
    <StyledList component="nav">
      {navLinks.map(({ title, path }) => (
        <StyledLink href={path}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </StyledLink>
      ))}
    </StyledList>
  );

  return (
    <>
      <IconButton
        aria-label="menu"
        edge="end"
        color="inherit"
        onClick={toggleDrawer(true)}
        size="large"
      >
        <Menu color="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onKeyDown={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {navDrawerList()}
      </SwipeableDrawer>
    </>
  );
}

const StyledList = styled(List)`
  background-color: #660000;
  height: 100%
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

NavDrawer.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavDrawer;
