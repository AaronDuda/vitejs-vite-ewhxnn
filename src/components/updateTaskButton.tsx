import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import { Box, DialogTitle, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DeadlinePicker from './deadlinePicker';

export interface EditDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function EditDialog(props: EditDialogProps) {
  const { onClose, selectedValue, open } = props;

  const theme = useTheme();

  const handleClose = () => {
    onClose(selectedValue);
  };

  function setSelectedDate(newValue: string | null): void {
    throw new Error('Function not implemented.');
  }

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
          <DeadlinePicker />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default function UpdateTaskButton() {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={openDialog} variant="contained">
        <EditIcon />
        Update
      </Button>
      <EditDialog
        open={open}
        selectedValue={''}
        onClose={closeDialog}
      ></EditDialog>
    </>
  );
}
