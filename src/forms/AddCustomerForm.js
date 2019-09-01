import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Formik } from "formik";
import * as Yup from "yup";

import FormBuilder from 'utils/FormBuilder';
import utils from 'utils';

import Button from '@material-ui/core/Button';

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

// define validation schema here
const validationSchema = Yup.object({
    name: Yup.string("Enter a name")
        .required("Name is required")
});
    
    

export default function AddCustomerForm(props) {
    const classes = useStyles();
    let { formObj } = props;
    let values = { name: "" };

    const doSubmit = e => {
        e.preventDefault();
        props.toggleForms('customer-profile');
        utils.goToTop();
        console.log('handle submit here');
    }

    return (
        <Paper className={classes.root}>
            <h1 className={classes.title}>{formObj.title}</h1>
            <Formik
                render={props => <FormBuilder components={formObj.components} {...props} /> }
                initialValues={values}
                validationSchema={validationSchema}
            />
            <div className={classes.center}>
                <Button variant="contained" color="primary" className={classes.button} onClick={doSubmit}>Done</Button>
            </div>
            
        </Paper>
        
    );
}



  
  