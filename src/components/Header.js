import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <FadeIn>
        <div className={classes.root}>
            <AppBar style={{backgroundColor: '#4EC9B0', color: '#DCDCAA'}} position="sticky">
                <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Avinash Sarguru
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    </FadeIn>  
  );
}