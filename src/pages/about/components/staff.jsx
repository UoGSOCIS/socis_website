import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import StaffList from './execList';
import ExecCard from './execCard';

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
              <ExecCard url={staff.image} position={staff.position} name={staff.name} content={staff.description} />
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
  margin-bottom: 2vh;
`;

const Member = styled(Grid)`
  padding-bottom: 25px;
`;

export default Staff;
