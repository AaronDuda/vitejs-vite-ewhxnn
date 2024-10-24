import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from '@mui/material';
import { Dayjs } from 'dayjs';

export interface DeadlinePickerProps {
  onChange: (value: Dayjs | null) => void;
}

export default function DeadlinePicker(props: DeadlinePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container disableGutters>
        <DatePicker
          onChange={props.onChange} 
          label="Deadline"
        />
      </Container>
    </LocalizationProvider>
  );
}



