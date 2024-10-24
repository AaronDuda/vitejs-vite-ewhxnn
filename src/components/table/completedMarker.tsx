import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

export interface CompletedMarkerProps {
    onChange: (checked: boolean) => void
}

export default function CompletedMarker(props: CompletedMarkerProps) {
  // Create state to track the checkbox status
  const [checked, setChecked] = useState(false);

  // Handle change when the checkbox is clicked
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.onChange(checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked} // Bind the state to the checkbox
          onChange={handleChange} // Update state when the checkbox changes
        />
      }
      label={checked ? "Complete!" : "In Progress"} // Optional label to display the checkbox status
    />
  );
}
