import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from '@mui/material';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

export interface DeadlinePickerProps {
  onChange: ((value: Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void);
}

export default function DeadlinePicker(props: DeadlinePickerProps) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container disableGutters component={DatePicker}>
        <DatePicker onChange={props.onChange} label="Deadline" defaultValue={dayjs('2022-04-17')} />
      </Container>
    </LocalizationProvider>
  );
}


