import React from 'react';
import Header from './header';
import Subheader from './whoAreWe';
import Subheader2 from './whatDoWeDo';
import Subheader3 from './contactUs';

function HomePage() {
  return (
    <div style={styles.main}>
      <div style={styles.banner}>
        <Header />
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
    paddingTop: '10vh',
    paddingBottom: '10vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    fontSize: '20px',
  },
};

export default HomePage;
