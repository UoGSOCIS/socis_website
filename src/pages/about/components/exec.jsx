import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExecList from './execList';
import ExecCard from './execCard';

function Exec() {
  return (
    <div className="team">
      <h1 style={{ paddingBottom: '2vh' }}>Meet our exec</h1>
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
    </div>
  );
}

export default Exec;
