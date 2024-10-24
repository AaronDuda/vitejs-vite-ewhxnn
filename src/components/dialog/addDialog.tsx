import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import { Box, DialogTitle, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DeadlinePicker from './deadlinePicker';
import PrioritySelector from './prioritySelector';
import DialogButtons from '../buttons/dialogButtons';
import dayjs from 'dayjs';
import { Task } from '../task';


export interface AddDialogProps {
  open: boolean;
  tasks: Map<string, Task>;
  add: (task: Task) => void;
  onClose: () => void;
  toastrError: (message: string, title: string) => void;
  toastrSuccess: (message: string, title: string) => void;
}

export function AddDialog(props: AddDialogProps) {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [deadline, setDeadline] = React.useState<dayjs.Dayjs>(dayjs());
  const [priority, setPriority] = React.useState<string>('low');
  const theme = useTheme();
  let invalidTitle = false;

  const handleClose = () => {
    props.onClose();
    props.toastrSuccess("Successfully closed dialog", "Success!");
  };

  const handleDeadlineChange = (deadline: dayjs.Dayjs | null) => {
    if (deadline) setDeadline(deadline)
  };

  const handleSubmit = () => {
    if (invalidTitle) {
        props.toastrError("Title already exists", "Oh no!");
    } else if (!title) {
        invalidTitle = true;
        props.toastrError("Title is required", "Oh no!");
    } else {
        const newTask: Task = {
            title: title,
            description: description,
            deadline: deadline.toDate().toLocaleDateString(),
            priority: priority,
            isComplete: false,
          };
      
          props.add(newTask);
    }
  }

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (props.tasks.has(e.target.value)) {
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
        <AddIcon /> Add Task
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
          <TextField error={invalidTitle} onChange={validateInput} value={title} label="Title" variant="outlined" />
          <TextField value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
          <DeadlinePicker onChange={handleDeadlineChange} />
          <PrioritySelector onChange={(e) => setPriority(e.target.value)} />
          <DialogButtons onSubmit={handleSubmit} onCancel={handleClose} submitButtonContent={<><AddIcon /> Add</>} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
