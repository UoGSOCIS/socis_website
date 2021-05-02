import React from 'react';
import { useViewport } from '../../components';

function BannerMessage() {
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
  },
};

export default BannerMessage;
