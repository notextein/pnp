import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import utils from 'utils';

// screen scroll tracker
window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("scroll-back").style.display = "block";
    } else {
        document.getElementById("scroll-back").style.display = "none";
    }
};

const useStyles = makeStyles(theme => ({
    fab: {
        display: 'none',
        margin: theme.spacing(1),
        position: 'fixed', /* Fixed/sticky position */
        bottom: 20, /* Place the button at the bottom of the page */
        right: 30, /* Place the button 30px from the right */
        zIndex: 1001, /* Make sure it does not overlap */
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
  


export default function ResetNavigation(props) {
    const classes = useStyles();

    const handleClick = e => {
        e.preventDefault();
        utils.goToTop();
    }

    return <Fab color="secondary" id="scroll-back" className={classes.fab}>
            <ArrowUpwardIcon onClick={handleClick}/>
        </Fab>
        
    ;
}



  
  