import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from 'components/navbar/style';
import { ReactComponent as Logo } from 'assets/img/arkhn-logo.svg';

const Navbar: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Toolbar className={classes.toolBar}>
        <Link to={'/'} className={classes.homeLink}>
          <Logo className={classes.logo} />
          <Typography variant="h1" color="primary">
            YOUYOU
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
