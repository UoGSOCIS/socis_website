import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ReturnHomeBtn, SubpageText, SubpageTitle } from '../../components';

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
      <SubpageTitle>404 not found</SubpageTitle>
      <SubpageText>Looks like you took a wrong turn :(</SubpageText>
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
