import React from 'react';
import Router from './Router';
import { Footer } from './components';

function App() {
  return (
    <div className="App" style={styles.all}>
      <Router />
      <Footer />
    </div>
  );
}

const styles = {
  all: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: '#F5F5F5',
  },
};

export default App;
