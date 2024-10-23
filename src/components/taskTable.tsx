import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AppHeader from './appHeader';
import { lightBlue } from '@mui/material/colors';
import { Task } from './task';

const WHITE = '#FFFFFF';
const GREY = '#F0F0F0';
const PRIMARY = '#1976d2';

export interface TaskTableProps {
  tasks: Array<Task>
};

export default function TaskTable(props: TaskTableProps) {
  const Cell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: lightBlue.A200,
      color: WHITE,
    },
  }));

  const TaskRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: WHITE,
    },
    '&:nth-of-type(even)': {
      backgroundColor: GREY,
    },
  }));

  function createData(
    title: string,
    description: number,
    deadline: number,
    priority: number,
    isComplete: number
  ) {
    return { title, description, deadline, priority, isComplete };
  }

  const taskArray = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const TaskCells = () =>
    props.tasks.map((task) => (
      <TaskRow key={task.title}>
        <Cell align="left" component="th" scope="row">
          {task.title}
        </Cell>
        <Cell align="right">{task.description}</Cell>
        <Cell align="right">{task.deadline}</Cell>
        <Cell align="right">{task.priority}</Cell>
        <Cell align="center">{task.isComplete}</Cell>
        <Cell align="center">{task.actions}</Cell>
      </TaskRow>
    ));

  const TaskTableLabels = () => (
    <TableRow sx={{ borderBottom: `3px solid ${PRIMARY}` }}>
      <Cell align="left">Title</Cell>
      <Cell align="right">Description</Cell>
      <Cell align="right">Deadline</Cell>
      <Cell align="right">Priority</Cell>
      <Cell align="center">Is Complete</Cell>
      <Cell align="center">Action</Cell>
    </TableRow>
  );

  return (
    <TableContainer>
      <AppHeader />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TaskTableLabels />
        </TableHead>
        <TableBody>
          <TaskCells />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
