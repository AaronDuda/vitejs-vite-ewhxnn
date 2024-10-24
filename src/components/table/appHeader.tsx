import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AddButton from '../buttons/addButton';

export interface AppHeaderProps {
  openAddDialog: () => void;
}

export default function AppHeader(props: AppHeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frameworks
          </Typography>
          <AddButton onClick={props.openAddDialog} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};