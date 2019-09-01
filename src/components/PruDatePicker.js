import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import pru from 'pru';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    marginTop: '16px',
  },
}));

export default function PruDatepicker(props) {
  const classes = useStyles();
  let { label, placeholder } = props.data;
  placeholder = pru.yyyymmdd(placeholder); // format
  return (
    <form className={classes.container} noValidate>
      <TextField
        fullWidth
        id={'id-'+label}
        label={label}
        type="date"
        defaultValue={placeholder}
        className={classes.textField}
        InputLabelProps={{
          // shrink: true,
        }}
      />
    </form>
  );
}

