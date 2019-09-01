import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PruSelect from '../components/PruSelect';
import PruRadio from '../components/PruRadio';
import PruTextfield from '../components/PruTextfield';
import PruDatePicker from '../components/PruDatePicker';


import utils from 'utils';

// import {Formik, Field, Form} from 'formik';

// import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
    gridItem: {
        padding: theme.spacing(1)
    },
    padTop: {
        marginTop: '16px'
    }
}));

export default function FormBuilder(props) {
    const classes = useStyles();
    let { components } = props;
    const maxRowSize = utils.material.maxRowSize;
    
    const gridItem = (component) => {
        let cmp = <></>;
        switch(component.type) {
            case 'select':
                cmp = <PruSelect {...component} />
            break;
            case 'option':
                cmp = <PruRadio data={component}/>
            break;
            case 'phone': // handle this separately
            case 'email': // handle this separately
            case 'textarea': // handle this separately
            case 'label': // handle this separately
            case 'string':
                cmp = <PruTextfield data={component}/>
            break;
            case 'date':
                cmp = <PruDatePicker data={component}/>
            break;
            default:
                console.log('default!');
        };


        return cmp;
    }
    
    let isSameRow = false;
    return (<>
        {
            Object.keys(components).map(function(key) {
                if (!isSameRow) {
                    let nextKey = (key*1)+1;
                    let currentRowSize = utils.getMaterialRowSize(components[key].rowSize); // wrapper for material rowSize
                    
                    let nextRowSize = 0;
                    if ( components[nextKey] !== undefined ) {
                        nextRowSize = utils.getMaterialRowSize(components[nextKey].rowSize);
                    }

                    if ( currentRowSize + nextRowSize <= maxRowSize ) { // allow only two rows
                        isSameRow = true;
                    }
    
                    return <Grid container key={key} >
                        <Grid item xs={currentRowSize} className={classes.gridItem}>
                            {gridItem(components[key])}
                        </Grid>
                        { 
                            isSameRow && components[nextKey] !== undefined &&
                            <Grid item xs={nextRowSize} className={classes.gridItem}>
                                {gridItem(components[nextKey])}
                            </Grid>
                        }
                        
                    </Grid>;
                } else {
                    isSameRow = false; // reset
                }
               
            })
        }
        
    </>);
}
