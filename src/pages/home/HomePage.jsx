import React from 'react';
import { NavBar } from '../../components';
import Banner from './Banner';

function HomePage() {
  return (
    <div style={styles.main}>
      <NavBar style={{ position: 'absolute' }} />
      <Banner />
    </div>
  );
}

const styles = {
  main: {
    paddingBottom: '4.5rem',
    backgroundColor: '#660000',
    height: '100vh',
  },
  mainMessage: {
    color: 'white',
    margin: 0,
    fontSize: '54px',
  },
};

export default HomePage;
