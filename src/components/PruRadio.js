import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// TO-DO:
// fix error on change selection
export default function PruRadio(props) {
  const [value, setValue] = React.useState(props.data.default);
  let { options, label } = props.data;
 
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl fullWidth component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        {options.map(value => (
           <FormControlLabel
            key={value.data}
            value={value.data}
            control={<Radio color="primary" />}
            label={value.label}
            labelPlacement="start"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}