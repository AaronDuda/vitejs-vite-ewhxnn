import { Task } from '../task';
import React from 'react';
import TaskCell from './taskCell';

export interface TaskCellsProps {
    tasks: Map<string, Task>,
    openUpdateDialog: (title: string) => void
    onDelete: (title: string) => void
}

export default function TaskCells(props: TaskCellsProps) {
    const [sortedTasks, setSortedTasks] = React.useState<[string, Task][]>([]);

    React.useEffect(() => {
      const sorted: [string, Task][] = Array.from(props.tasks.entries())
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
      setSortedTasks(sorted);
    }, [props.tasks]);
  
    return (
      sortedTasks.map(([title, task]) => (
        <TaskCell 
              key={title}
              title={title}
              task={task}
              openUpdateDialog={props.openUpdateDialog}
              onDelete={props.onDelete} />
      ))
    );
  };