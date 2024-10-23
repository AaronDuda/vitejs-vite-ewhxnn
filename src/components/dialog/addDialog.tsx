import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import { Box, DialogTitle, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DeadlinePicker from './deadlinePicker';
import PrioritySelector from './prioritySelector';
import DialogButtons from '../buttons/dialogButtons';
import dayjs from 'dayjs';
import * as toastr from "toastr";


export interface EditDialogProps {
  open: boolean;
  selectedValue: string;
  titles: Map<string, boolean>;
  onClose: (value: string) => void;
}

export function AddDialog(props: EditDialogProps) {
  const title = React.useRef<string>('');
  const description = React.useRef<string>('');
  const [deadline, setDeadline] = React.useState<dayjs.Dayjs | null>(dayjs());
  const [priority, setPriority] = React.useState<string>('low');
  const theme = useTheme();
  let invalidTitle = false;

  const handleClose = () => {
    props.onClose('selectedValue');
    toastr.success("Successfully closed dialog", "Success!");
  };

  const handleSubmit = () => {
    if (invalidTitle) {
        toastr.error("Title already exists");
    } else if (!title.current) {
        invalidTitle = true;
        toastr.error("Title is required");
    } else {
        toastr.success("Submitting");
        props.onClose('');
    }
  }

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.titles.has(e.target.value)) {
        invalidTitle = true;
    } else {
        invalidTitle = false;
    }
  } 

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        }}
      >
        <EditIcon /> Add Task
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
          <TextField error={invalidTitle} onChange={validateInput} inputRef={title} label="Title" variant="outlined" />
          <TextField inputRef={description} label="Description" variant="outlined" />
          <DeadlinePicker onChange={(deadline) => setDeadline(deadline)} />
          <PrioritySelector onChange={(e) => setPriority(e.target.value)} />
          <DialogButtons onSubmit={handleSubmit} onCancel={handleClose} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
