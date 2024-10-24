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
  const [deadline, setDeadline] = React.useState<dayjs.Dayjs | null>(null);
  const [priority, setPriority] = React.useState<string | null>(null);
  const theme = useTheme();
  const [invalidTitle, setInvalidTitle] = React.useState<boolean>(false);
  const handleClose = () => {
    props.onClose();
  };

  const handleDeadlineChange = (newDeadline: dayjs.Dayjs | null) => {
    setDeadline(newDeadline)
  };

  const handleSubmit = () => {
    let error = false;
    if (!title) {
        props.toastrError("Title is required", "Submission Failed");
        error = true;
    } 
    
    if (!validateInput(title)) {
        props.toastrError("Title already exists", "Submission Failed");
        error = true;
    }
    
    if (!deadline) {
        props.toastrError("Deadline is required", "Submission Failed");
        error = true;
    }
    
    if (!priority) {
        props.toastrError("Priority is required", "Submission Failed");
    } 
    
    if (!error && deadline && priority) {
        const newTask: Task = {
            title: title,
            description: description,
            deadline: deadline.toDate().toLocaleDateString(),
            priority: priority,
            isComplete: false,
          };
      
          props.add(newTask);
          props.toastrSuccess(`successfully added "${title}"`, "Add Success");
    }
  }

  const validateInput = (newTitle: string) => {
    setTitle(newTitle);
    if (props.tasks.has(newTitle) || !newTitle) {
        setInvalidTitle(true);
        return false;
    } else {
        setInvalidTitle(false);
        return true;
    }
  }

  const setHelperText = () => {
    return !title ? "Title is required" : 
    invalidTitle ? "Title already exists" : "";
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
          <TextField 
            error={invalidTitle || !title} 
            onChange={(e) => validateInput(e.target.value)} 
            value={title} 
            label="Title" 
            variant="outlined"
            helperText={setHelperText()} />
          <TextField value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
          <DeadlinePicker onChange={handleDeadlineChange} />
          <PrioritySelector onChange={(e) => setPriority(e.target.value)} />
          <DialogButtons onSubmit={handleSubmit} onCancel={handleClose} submitButtonContent={<><AddIcon /> Add</>} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
