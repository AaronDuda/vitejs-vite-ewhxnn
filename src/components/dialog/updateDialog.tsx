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
import { Task } from '../task';


export interface EditDialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  update: (task: Task) => void;
  toastrError: (message: string, title: string) => void;
  toastrSuccess: (message: string, title: string) => void;
}

export function UpdateDialog(props: EditDialogProps) {
  const [description, setDescription] = React.useState<string>('');
  const [deadline, setDeadline] = React.useState<dayjs.Dayjs>(dayjs());
  const [priority, setPriority] = React.useState<string>('low');
  const theme = useTheme();

  const handleClose = () => {
    props.onClose();
  };

  const handleDeadlineChange = (deadline: dayjs.Dayjs | null) => {
    if (deadline) setDeadline(deadline)
  };

  const handleSubmit = () => {
    props.onClose();
    const newTask: Task = {
      title: props.title.toString(),
      description: description,
      deadline: deadline.toDate().toLocaleDateString(),
      priority: priority,
      isComplete: false,
    };

    props.update(newTask);
    props.toastrSuccess(`successfully updated ${props.title}`, "Update Success");
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
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
          <TextField value={description} onChange={(e) => setDescription(e.target.value)}id="Description" label="Description" variant="outlined" />
          <DeadlinePicker onChange={handleDeadlineChange} />
          <PrioritySelector onChange={(e) => setPriority(e.target.value)} />
          <DialogButtons onSubmit={handleSubmit} onCancel={handleClose} submitButtonContent={<><EditIcon /> Edit</>} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
