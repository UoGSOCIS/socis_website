import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function LearnMoreBtn({ href }) {
  return (
    <div className="LearnMoreBtn">
      <Button variant="contained" color="primary" href={href}>Learn More</Button>
    </div>
  );
}

LearnMoreBtn.propTypes = {
  href: PropTypes.string,
};

LearnMoreBtn.defaultProps = {
  href: '/',
};

export default LearnMoreBtn;
