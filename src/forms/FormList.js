import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import utils from 'utils';
import pru from 'pru';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
}));    

export default function FormList(props) {
    const classes = useStyles();

    function handleClick( key, value ) {
        utils.goToTop();

        props.setFormObj(value);
        props.toggleForms('show-form');
    }
    
    return (<>
        {
            Object.keys(pru.form).map( key => {
                return <Button key={key} className={classes.root} variant="contained" onClick={handleClick.bind(this, key, pru.form[key])}>{key}</Button>
            })
        }        

        </>
    );
}



  
  