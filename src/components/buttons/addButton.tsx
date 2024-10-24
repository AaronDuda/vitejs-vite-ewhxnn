import AddIcon from '@mui/icons-material/Add';
import { CircleButton } from './circleButton';


export interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton(props: AddButtonProps) {
  return (
    <>
      <CircleButton onClick={props.onClick} variant="contained">
        <AddIcon />
        Add
      </CircleButton>
    </>
  );
}
