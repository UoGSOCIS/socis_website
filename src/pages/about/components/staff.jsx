import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import StaffList from './execList';
import Team from './team';

function Staff() {
  return (
    <>
      <Title>Meet our staff</Title>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {
          StaffList.staff.map((staff) => (
            <Member item sm={12} md={6} lg={4}>
              <Team url={staff.image} position={staff.position} name={staff.name} content={staff.description} />
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

export default Staff;
