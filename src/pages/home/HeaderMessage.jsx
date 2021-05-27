import React from 'react';
import { useViewport } from '../../components';

function HeaderMessage() {
  const { width } = useViewport();
  const breakpoint = 500;

  return (
    <h1 style={styles.message}>
      {
          width > breakpoint
            ? 'We are the Society of Computing and Information Science'
            : 'We are SOCIS'
      }
    </h1>
  );
}

const styles = {
  message: {
    color: 'white',
    marginTop: 0,
    fontSize: '54px',
    marginLeft: '0.5vw',
    marginRight: '0.1vw',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
};

export default HeaderMessage;
