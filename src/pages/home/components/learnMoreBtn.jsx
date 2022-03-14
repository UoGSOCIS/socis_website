import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LearnMoreBtn({ href }) {
  return (
    <Wrapper>
      <StyledButton
        className="LearnMoreBtn"
        variant="contained"
        color="primary"
        href={href}
        style={{ backgroundColor: 'rgb(102, 0, 0)' }}
      >
        Learn More
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const StyledButton = styled(Button)`
  font-size: 14px;
  display: block;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 16px 32px;
  border-radius: 28px;
  line-height: 1.625;
`;

LearnMoreBtn.propTypes = {
  href: PropTypes.string,
};

LearnMoreBtn.defaultProps = {
  href: '/',
};

export default LearnMoreBtn;
