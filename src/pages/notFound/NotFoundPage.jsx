import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NavBar } from '../../components';

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={styles.grid}
      >
        <h1 style={styles.header}>404 not found</h1>
        <p>Looks like you took a wrong turn :(</p>
        <Button href="/">Return Home</Button>
      </Grid>
    </>
  );
}

const styles = {
  grid: {
    height: '80vh',
  },
  header: {
    marginBottom: '0',
  },
};

export default NotFoundPage;
