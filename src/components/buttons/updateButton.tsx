import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateDialog } from '../dialog/updateDialog';
import { CircleButton } from './circleButton';


export default function UpdateButton() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    toastr.success("Updated");
  };
  return <>
      <CircleButton onClick={() => setOpen(true)} variant="contained">
        <EditIcon />
        Update
      </CircleButton>
      <UpdateDialog
        open={open}
        selectedValue={''}
        onClose={handleClose}
      ></UpdateDialog>
    </>
}
