import React from 'react';

function Subheader2() {
  return (
    <div className="subheader2" style={styles.subheader}>
      <h1>Subheading 2</h1>
      <p>Subheading text</p>
    </div>
  );
}

const styles = {
  subheader: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
};

export default Subheader2;
