import EditIcon from '@mui/icons-material/Edit';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2'
import CloseIcon from '@mui/icons-material/Close';

export interface DialogButtonsProps {
    onSubmit: () => void;
    onCancel: () => void;
}

export default function DialogButtons(props: DialogButtonsProps) {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                <Button onClick={props.onSubmit} variant="contained">
                  <EditIcon />
                  Edit
                </Button>
              </Grid>
              <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                <Button onClick={props.onCancel}  color="error" variant="contained">
                  <CloseIcon />
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
    </>
}