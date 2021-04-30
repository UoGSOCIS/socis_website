import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

function NavBar() {
    return (
        <div className={'navbar'}>
            <AppBar position="static" style={{backgroundColor: '#660000'}}>
                <Toolbar>
                    <Typography variant="h6">
                        SOCIS
                    </Typography>
                    <div className={styles.links}>
                        <Button color="inherit" href={'/clubs'}>Clubs</Button>
                        <Button color="inherit" href={'/policy'}>Policy</Button>
                        <Button color="inherit" href={'/about'}>About</Button>
                        <Button color="inherit" href={'/contact'}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const styles = {
    links: {
        marginLeft: 'auto',
        marginRight: -12,
    },
};

export default NavBar;
