import React from 'react';

function Footer() {
  return (
    <div className="footer" style={styles.footer}>
      <p style={styles.footerText}>Footer</p>
    </div>
  );
}

const styles = {
  footer: {
    background: '#465052',
    position: 'absolute',
    paddingTop: '1.0rem',
    paddingBottom: '1.0rem',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    textAlign: 'center',
    display: 'block',
    height: '2.5rem',
  },
  footerText: {
    color: 'white',
  },
};

export default Footer;
