import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {
  NavBar, ReturnHomeBtn, SubpageText, SubpageTitle,
} from '../../components';

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <StyledGrid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <SubpageTitle>404 not found</SubpageTitle>
        <SubpageText>Looks like you took a wrong turn :(</SubpageText>
        <ReturnHomeBtn />
      </StyledGrid>
    </>
  );
}

const StyledGrid = styled(Grid)`
  height: 70vh;
`;

export default NotFoundPage;
