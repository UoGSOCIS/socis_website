import React from 'react';
import { Button } from '@material-ui/core';

function ReturnHomeBtn() {
  return <Button variant="contained" color="primary" href="/" style={style}>Return Home</Button>;
}

const style = {
  color: '#000',
  backgroundColor: '#FD8900',
};

export default ReturnHomeBtn;
