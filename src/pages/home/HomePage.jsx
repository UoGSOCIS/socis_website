import React from 'react';
import { NavBar } from '../../components';
import Banner from './Banner';
import Subheader from './Subheader';
import Subheader2 from './Subheader2';
import Subheader3 from './Subheader3';

function HomePage() {
  return (
    <div style={styles.main}>
      <div style={styles.banner}>
        <NavBar style={{ position: 'absolute' }} />
        <Banner />
      </div>
      <div style={styles.subheaders}>
        <Subheader />
        <Subheader2 />
        <Subheader3 />
      </div>
    </div>
  );
}

const styles = {
  main: {
    paddingBottom: '3.0rem',
  },
  banner: {
    height: '100vh',
  },
  subheaders: {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    paddingTop: '10vh',
    paddingBottom: '10vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
  },
};

export default HomePage;
