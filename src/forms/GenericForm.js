import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormBuilder from 'utils/FormBuilder';

import utils from 'utils';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(6),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        padding: theme.spacing(2),
    },
    padTop: {
        marginTop: '16px',
    },
    center: {
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        width: 200,
    }
}));

// for demo
export default function GenericForm(props) {
    const classes = useStyles();
    let { formObj } = props;

    console.log('GenericForm loaded');
    console.log('GenericForm props', props);

    const doSubmit = e => {
        e.preventDefault();
        utils.goToTop();
        
        props.toggleForms();
    }


    return (
        <Paper className={classes.root}>
            <h1 className={classes.title}>{formObj.title}</h1>

            <FormBuilder components={formObj.components} {...props} /> 
            
            <div className={classes.center}>
                <Button variant="contained" className={classes.button} onClick={doSubmit}>Done</Button>
            </div>
            
        </Paper>
    );
}



  
  