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
  padding: '10px 20px 10px 20px',
  fontSize: '14px',
};

export default LearnMoreBtn;
