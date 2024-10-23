import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddDialog } from '../dialog/addDialog';
import { CircleButton } from './circleButton';


export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const testMap = new Map<string, boolean>();
  testMap.set("test", true);

  return (
    <>
      <CircleButton onClick={openDialog} variant="contained">
        <AddIcon />
        Add
      </CircleButton>
      <AddDialog
        open={open}
        selectedValue={''}
        onClose={closeDialog} 
        titles={testMap}>
      </AddDialog>
    </>
  );
}
