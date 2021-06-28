import React from 'react';

function Footer() {
  return (
    <div className="footer" style={styles} />
  );
}

const styles = {
  background: '#465052',
  position: 'absolute',
  paddingTop: '1.0rem',
  paddingBottom: '1.0rem',
  bottom: '0',
  width: '100%',
  display: 'block',
  height: '2.5rem',
};

export default Footer;
