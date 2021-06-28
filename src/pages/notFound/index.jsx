import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ReturnHomeBtn } from '../../components';

function NotFoundPage() {
  return (
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
      <ReturnHomeBtn />
    </Grid>
  );
}

const styles = {
  grid: {
    height: '70vh',
  },
  header: {
    marginBottom: '0',
  },
};

export default NotFoundPage;
