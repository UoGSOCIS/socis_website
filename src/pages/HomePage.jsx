import React from 'react';
import NavBar from "../components/navbar";
import Box from "@material-ui/core/Box";

function HomePage() {
    return (
        <div style={styles.main}>
            <NavBar style={{ postion: 'absolute' }} />
            <Box
                display="flex"
                width={'100%'} height={'75%'}
            >
                <Box m="auto">
                    <h1 style={styles.mainMessage}>We are the Society of Computing and Information Science</h1>
                </Box>
            </Box>
        </div>
    )
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
    }
};

export default HomePage;
