import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AddTaskButton from './addTaskButton';

const appHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frameworks
          </Typography>
          <AddTaskButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default appHeader;
