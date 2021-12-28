import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { ReturnHomeBtn } from '../../components';

function NotFoundPage() {
  return (
    <StyledGrid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Header>404 not found</Header>
      <p>Looks like you took a wrong turn :(</p>
      <ReturnHomeBtn />
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)`
  height: 70vh;
`;

const Header = styled.h1`
  margin-bottom: 0;
`;

export default NotFoundPage;
