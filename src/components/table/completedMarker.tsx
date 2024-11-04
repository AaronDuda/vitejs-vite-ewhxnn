import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

export interface CompletedMarkerProps {
    onChange: (checked: boolean) => void
}

export default function CompletedMarker(props: CompletedMarkerProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    props.onChange(checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
        />
      }
      label={checked ? "Complete!" : "In Progress"}
    />
  );
}
