import DeleteIcon from '@mui/icons-material/Delete';
import { CircleButton } from './circleButton';

export interface DeleteButtonProps {
  title: string
  onClick: (title: string) => void;
};

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <CircleButton onClick={() => props.onClick(props.title)} color="error" variant="contained">
      <DeleteIcon />
      Delete
    </CircleButton>
  );
}