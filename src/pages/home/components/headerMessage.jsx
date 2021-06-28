import React from 'react';
import { useViewport } from '../../../components';

function HeaderMessage() {
  const { width } = useViewport();
  const breakpoint = 500;

  return (
    <h1
      className="animate__animated animate__fadeInRight"
      style={
        width > 960
          ? styles.message
          : styles.messageMobile
      }
    >
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
    textAlign: 'left',
  },
  messageMobile: {
    color: 'white',
    marginTop: 0,
    fontSize: '54px',
    marginLeft: '0.5vw',
    marginRight: '0.1vw',
    paddingLeft: '30px',
    paddingRight: '30px',
    textAlign: 'center',
  },
};

export default HeaderMessage;
