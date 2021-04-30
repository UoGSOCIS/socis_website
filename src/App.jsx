import React from "react";
import './App.css';
import Router from "./Router";

function App() {
    return (
        <div className={'App'} style={styles.all}>
            <Router />
        </div>
    );
}

const styles = {
    all: {
        position: 'relative',
        minHeight: '100vh',
    }
};

export default App;
