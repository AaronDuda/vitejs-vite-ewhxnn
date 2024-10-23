import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DeadlinePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Deadline" />
    </LocalizationProvider>
  );
}
