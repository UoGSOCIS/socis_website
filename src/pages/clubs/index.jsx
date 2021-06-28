import React from 'react';
import { GCC, GWICS, DSC } from './components';

function ClubPage() {
  return (
    <div className="club">
      <div className="ClubPage" style={styles.page}>
        <GCC />
        <br />
        <GWICS />
        <br />
        <DSC />
      </div>
      <div style={styles.preFooter} />
    </div>
  );
}

const styles = {
  page: {
    paddingTop: '2.0rem',
    paddingLeft: '2.0rem',
    paddingRight: '2.0rem',
    paddingBottom: '2.0rem',
    // height: '200vh',
  },
  club: {
    paddingBottom: '1.0rem',
    paddingTop: '1.0rem',
  },
  preFooter: {
    paddingBottom: '2.0rem',
    paddingTop: '2.0rem',
  },
  picture: {
    // width: '300vw',
    float: 'left',
    paddingRight: '2.0rem',
  },
  text: {
    // width: '50vw',
    // paddingLeft: '2.0rem',
    // paddingRight: '2.0rem',
  },
  button: {
    textAlign: 'center',
  },
  bStyle: {
    background: '#FD8900',
  },
};

export default ClubPage;
