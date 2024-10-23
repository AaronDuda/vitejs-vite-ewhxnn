import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function addTaskButton() {
  return (
    <Button variant="contained">
      <AddIcon />
      Add
    </Button>
  );
}
