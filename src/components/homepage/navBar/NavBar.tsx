import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';

const NavBar: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant="h1" color="primary">YOUYOU</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;