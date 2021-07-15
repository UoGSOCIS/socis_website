import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import ExecList from './execList';
import ExecCard from './execCard';

function Exec() {
  return (
    <>
      <Title>Meet our exec</Title>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {
          ExecList.exec.map((exec) => <ExecCard url={exec.image} position={exec.position} name={exec.name} content={exec.description} />)
        }
      </Grid>
    </>
  );
}

const Title = styled.p`
  text-align: left;
  margin-top: 10vh;
  font-size: 36px;
  margin-bottom: 2vh;
`;

export default Exec;
