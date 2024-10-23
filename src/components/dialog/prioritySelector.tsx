import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export interface PrioritySelectorProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PrioritySelector(props: PrioritySelectorProps) {

  return (
    <FormControl>
      <FormLabel id="priority-radio-buttons">Task Priority</FormLabel>
      <RadioGroup
        onChange={props.onChange}
        defaultValue="low"
        name="priority-radio-buttons"
      >
        <FormControlLabel value="high" control={<Radio />} label="High" />
        <FormControlLabel value="med" control={<Radio />} label="Medium" />
        <FormControlLabel value="low" control={<Radio />} label="Low" />
      </RadioGroup>
    </FormControl>
  );
}