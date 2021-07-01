import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LearnMoreBtn({ href }) {
  return (
    <StyledButton className="LearnMoreBtn" variant="contained" color="primary" href={href} style={{ backgroundColor: 'rgb(102, 0, 0)' }}>Learn More</StyledButton>
  );
}

const StyledButton = styled(Button)`
  font-size: 14px,
  align: center,
  display: block,
  align-items: center,
  justify-content: center,
  width: 200px,
  margin: auto, 
`;

LearnMoreBtn.propTypes = {
  href: PropTypes.string,
};

LearnMoreBtn.defaultProps = {
  href: '/',
};

export default LearnMoreBtn;
