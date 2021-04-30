import React from 'react';
import './App.css';
import Router from './Router';

function App() {
  return (
    <div className="App" style={styles.all}>
      <Router />
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
