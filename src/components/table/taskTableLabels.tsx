import { TableRow } from "@mui/material";
import { Cell, PRIMARY } from "./taskTable";


export default function TaskTableLabels() {
    return <>
    <TableRow sx={{ borderBottom: `3px solid ${PRIMARY}` }}>
      <Cell align="left">Title</Cell>
      <Cell align="center">Description</Cell>
      <Cell align="center">Deadline</Cell>
      <Cell align="center">Priority</Cell>
      <Cell align="center">Is Complete</Cell>
      <Cell align="center">Action</Cell>
    </TableRow>
    </>
};