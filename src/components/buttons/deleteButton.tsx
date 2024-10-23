import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircleButton } from './circleButton';

export default function DeleteButton() {
  return (
    <CircleButton color="error" variant="contained">
      <DeleteIcon />
      Delete
    </CircleButton>
  );
}