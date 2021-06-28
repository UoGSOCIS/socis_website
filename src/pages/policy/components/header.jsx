import React from 'react';

function Header() {
  return (
    <div>
      <h1 style={styles.title}>SOCIS Policies</h1>
      <p style={styles.subtext}>Last updated May 28, 2021</p>
    </div>
  );
}

const styles = {
  title: {
    textAlign: 'center',
    marginBottom: '0',
  },
  subtext: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '0',
  },
};

export default Header;
