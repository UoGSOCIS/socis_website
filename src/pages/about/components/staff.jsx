import React from 'react';
import Grid from '@material-ui/core/Grid';
import StaffList from './execList';
import ExecCard from './execCard';

function Staff() {
  return (
    <div className="team">
      <h1 style={{ paddingBottom: '2vh' }}>Meet our staff</h1>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {
          StaffList.staff.map((staff) => <ExecCard url={staff.image} position={staff.position} name={staff.name} content={staff.description} />)
        }
      </Grid>
    </div>
  );
}

export default Staff;
