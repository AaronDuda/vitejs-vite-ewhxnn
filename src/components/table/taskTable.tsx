import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AppHeader from './appHeader';
import { lightBlue } from '@mui/material/colors';
import { Task } from '../task';
import TaskTableLabels from './taskTableLabels';
import TaskCells from './taskCells';
import React from 'react';

export const WHITE = '#FFFFFF';
export const GREY = '#F0F0F0';
export const PRIMARY = '#1976d2';

export const Cell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: lightBlue.A200,
    color: WHITE,
    width: '16.666%',
  },
  width: '16.666%',
}));

export const TaskRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: WHITE,
  },
  '&:nth-of-type(even)': {
    backgroundColor: GREY,
  },
}));

export interface TaskTableProps {
  tasks: Map<string, Task>,
  deleteTask: (title: string) => void,
  openAddDialog: () => void,
  openUpdateDialog: (title: string) => void
};

export default function TaskTable(props: TaskTableProps) {
  const [currentTasks, setCurrentTasks] = React.useState<Map<string, Task>>(props.tasks);

  React.useEffect(() => {
    setCurrentTasks(props.tasks);
  }, [props.tasks]);

  return (
    <TableContainer>
      <AppHeader openAddDialog={props.openAddDialog} />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TaskTableLabels />
        </TableHead>
        <TableBody>
          <TaskCells tasks={currentTasks} openUpdateDialog={props.openUpdateDialog} onDelete={props.deleteTask} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
