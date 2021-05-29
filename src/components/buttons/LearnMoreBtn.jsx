import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function LearnMoreBtn({ href }) {
  return (
    <div className="LearnMoreBtn">
      <Button variant="contained" color="primary" style={styles.learnMoreStyle} href={href}>Learn More</Button>
    </div>
  );
}

LearnMoreBtn.propTypes = {
  href: PropTypes.string,
};

LearnMoreBtn.defaultProps = {
  href: '/',
};

const styles = {
  learnMoreStyle: {
    backgroundColor: 'rgb(102, 0, 0)',
    padding: '10px 20px 10px 20px',
    fontSize: '14px',
  },
};

export default LearnMoreBtn;
