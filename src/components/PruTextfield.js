import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    minWidth: 200
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function PruTextfield(props) {
  const classes = useStyles();
  let { label, placeholder, maxLen } = props.data;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        fullWidth
        maxLength={maxLen}
        id={'id-'+label}
        label={label}
        placeholder={placeholder}
        margin="normal"
      />
      
    </form>
  );
}