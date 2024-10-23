import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteTaskButton() {
  return (
    <Button color="error" variant="contained">
      <DeleteIcon />
      Delete
    </Button>
  );
}