import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import ExecList from './execList';
import Team from './team';

function Exec() {
  return (
    <>
      <Title>Meet our exec</Title>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {
          ExecList.exec.map((exec) => (
            <Member item sm={12} md={6} lg={4}>
              <Team url={exec.image} position={exec.position} name={exec.name} content={exec.description} />
            </Member>
          ))
        }
      </Grid>
    </>
  );
}

const Title = styled.p`
  text-align: left;
  margin-top: 10vh;
  font-size: 36px;
  margin-bottom: 4vh;
`;

const Member = styled(Grid)`
  padding-bottom: 4vh;
`;

export default Exec;
