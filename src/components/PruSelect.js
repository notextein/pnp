import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import utils from 'utils';
import pru from 'pru';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    marginTop: '16px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function PruSelect(props) {
  const classes = useStyles();
  const { id, label } = props;

  const options = pru.getOptions(props);

  const [values, setValues] = React.useState({
    PruSelect: ''
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (<>
    <form className={classes.root} autoComplete="off">
      <FormControl fullWidth required className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor='PruSelect'>
          {label}
        </InputLabel>
        <Select
          value={values.PruSelect}
          onChange={handleChange}
          name='PruSelect'
          inputProps={{
            id: {id},
          }}
          className={classes.selectEmpty}
        >
        {
          options.map(item => (
            <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </form>
  </>);
}