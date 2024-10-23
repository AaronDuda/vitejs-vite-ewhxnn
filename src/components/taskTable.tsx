import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppHeader from './appHeader';
import { lightBlue } from '@mui/material/colors';

export enum Priority {
  low,
  med,
  high
};

export type Task = {
  title: string,
  description: string,
  deadline: Date,
  priority: Priority,
  isComplete: boolean
};

const WHITE = '#FFFFFF';

const Cell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: lightBlue.A200,
    color: WHITE,
  },
}));

const TaskRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
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
  taskArray.map((task) => (
    <TaskRow key={task.title}>
      <Cell align="left" component="th" scope="row">
        {task.title}
      </Cell>
      <Cell align="right">{task.description}</Cell>
      <Cell align="right">{task.deadline}</Cell>
      <Cell align="right">{task.priority}</Cell>
      <Cell align="center">{task.isComplete}</Cell>
      <Cell align="center">{task.isComplete}</Cell>
    </TaskRow>
  ));

const TaskTableLabels = () => (
  <TableRow>
    <Cell align="left">Title</Cell>
    <Cell align="right">Description</Cell>
    <Cell align="right">Deadline</Cell>
    <Cell align="right">Priority</Cell>
    <Cell align="center">Is Complete</Cell>
    <Cell align="center">Action</Cell>
  </TableRow>
);

export default function TaskTable() {
  return (
    <TableContainer component={Paper}>
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
