import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import FormBuilder from 'utils/FormBuilder';

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
        marginTop: '16px'
    }
}));

export default function AdditionalPersonalInfo(props) {
    const classes = useStyles();
    let { formObj } = props;

    const doSubmit = e => {
        props.onSubmit();
    }

    return (
        <Paper className={classes.root}>
            <h1 className={classes.title}>{formObj.title}</h1>
            <FormBuilder components={formObj.components} />

        </Paper>
        
    );
}



  
  