import React from 'react';
import NavBar from '../../components/navbar';
import HomeHeader from './HomeHeader';

function HomePage() {
  return (
    <div style={styles.main}>
      <NavBar style={{ postion: 'absolute' }} />
      <HomeHeader />
    </div>
  );
}

const styles = {
  main: {
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
