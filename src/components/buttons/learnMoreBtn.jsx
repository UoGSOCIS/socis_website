import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function LearnMoreBtn({ href }) {
  return (
    <Button className="LearnMoreBtn" variant="contained" color="primary" style={style} href={href}>Learn More</Button>
  );
}

LearnMoreBtn.propTypes = {
  href: PropTypes.string,
};

LearnMoreBtn.defaultProps = {
  href: '/',
};

const style = {
  backgroundColor: 'rgb(102, 0, 0)',
  fontSize: '14px',
  align: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
};

export default LearnMoreBtn;
