import { TableRow } from "@mui/material";
import { Cell, PRIMARY } from "./taskTable";

export default function TaskTableLabels() {
    return (
        <TableRow sx={{ borderBottom: `3px solid ${PRIMARY}` }}>
            <Cell align="left" sx={{ borderRight: '5px solid white' }}>Title</Cell>
            <Cell align="center" sx={{ borderRight: '5px solid white' }}>Description</Cell>
            <Cell align="center" sx={{ borderRight: '5px solid white' }}>Deadline</Cell>
            <Cell align="center" sx={{ borderRight: '5px solid white' }}>Priority</Cell>
            <Cell align="center" sx={{ borderRight: '5px solid white' }}>Is Complete</Cell>
            <Cell align="center">Action</Cell>
        </TableRow>
    );
}