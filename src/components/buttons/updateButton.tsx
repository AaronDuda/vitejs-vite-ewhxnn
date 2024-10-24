import EditIcon from '@mui/icons-material/Edit';
import { CircleButton } from './circleButton';

export interface UpdateButtonProps {
  title: string,
  openUpdateDialog: (title: string) => void
}

export default function UpdateButton(props: UpdateButtonProps) {

  const handleClick = () => {
    props.openUpdateDialog(props.title);
  }
  return <>
      <CircleButton onClick={handleClick} variant="contained">
        <EditIcon />
        Update
      </CircleButton>
    </>
}
