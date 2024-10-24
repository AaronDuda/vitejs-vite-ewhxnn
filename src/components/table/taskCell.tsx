import { Task } from '../task';
import CompletedMarker from './completedMarker';
import { Cell, TaskRow } from './taskTable';
import React from 'react';
import TaskButtons from '../buttons/taskButtons';

export interface TaskCellProps {
    key: string,
    title: string,
    task: Task,
    openUpdateDialog: (title: string) => void
    onDelete: (title: string) => void
}

export default function TaskCell(props: TaskCellProps) {
    const [canUpdate, setCanUpdate] = React.useState<boolean>(true);
  
    return (
        <TaskRow key={props.title}>
          <Cell align="left" component="th" scope="row">
            {props.title}
          </Cell>
          <Cell align="center">{props.task.description}</Cell>
          <Cell align="center">{props.task.deadline}</Cell>
          <Cell align="center">{props.task.priority}</Cell>
          <Cell align="center"><CompletedMarker onChange={() => setCanUpdate(!canUpdate)} /></Cell>
          <Cell align="center">
            <TaskButtons 
              title={props.title}
              openUpdateDialogue={props.openUpdateDialog}
              canUpdate={canUpdate} onDelete={props.onDelete}>
            </TaskButtons>
          </Cell>
        </TaskRow>
    );
  };