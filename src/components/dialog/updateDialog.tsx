import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import { Box, DialogTitle, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DeadlinePicker from './deadlinePicker';
import PrioritySelector from './prioritySelector';
import DialogButtons from '../buttons/dialogButtons';
import * as toastr from "toastr";
import dayjs from 'dayjs';


export interface EditDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function UpdateDialog(props: EditDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [deadline, setDeadline] = React.useState<dayjs.Dayjs | null>(dayjs());
  const [priority, setPriority] = React.useState<string>('low');
  const theme = useTheme();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmit = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <EditIcon /> Edit Task
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
          }}
        >
          <TextField id="Description" label="Description" variant="outlined" />
          <DeadlinePicker onChange={(deadline) => setDeadline(deadline)} />
          <PrioritySelector onChange={(e) => setPriority(e.target.value)} />
          <DialogButtons onSubmit={handleSubmit} onCancel={handleClose} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
