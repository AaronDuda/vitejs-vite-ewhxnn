import './App.css';
import 'toastr/build/toastr.min.css';
import TaskTable from './components/table/taskTable.tsx';
import { Task } from './components/task.ts';
import toastr from 'toastr';
import { AddDialog } from './components/dialog/addDialog.tsx';
import { UpdateDialog } from './components/dialog/updateDialog.tsx';
import React from 'react';

function App() {
  const [updateTaskTitle, setUpdateTaskTitle] = React.useState<string>('');
  const [updateOpen, setUpdateOpen] = React.useState<boolean>(false);
  const [addOpen, setAddOpen] = React.useState<boolean>(false);
  const [tasks, setTasks]= React.useState<Map<string, Task>>(new Map<string, Task>());

  const newTableUpdate = (task: Task) => {
    const updatedTasks = new Map(tasks);
    updatedTasks.set(task.title, task);
    setTasks(updatedTasks);
    setAddOpen(false);
    setUpdateOpen(false);
  };

  const deleteTask = (title: string) => {
    const updatedTasks = new Map(tasks);
    updatedTasks.delete(title);
    setTasks(updatedTasks);
};

  const openUpdateDialog = (title: string) => {
    setUpdateTaskTitle(title);
    setUpdateOpen(true);
  };

  const closeUpdateDialog = () => {
    setUpdateOpen(false);
  };

  const openAddDialog = () => {
    setAddOpen(true);
  };

  const closeAddDialog = () => {
    setAddOpen(false);
  };

  return (
    <>
      <TaskTable 
        tasks={tasks} 
        openAddDialog={openAddDialog} 
        openUpdateDialog={openUpdateDialog} 
        deleteTask={deleteTask}/>
      <AddDialog
        open={addOpen}
        onClose={closeAddDialog}
        tasks={tasks}
        add={newTableUpdate} 
        toastrError={(message: string, title: string) => toastr.error(message, title)} 
        toastrSuccess={(message: string, title: string) => toastr.success(message, title)} />
      <UpdateDialog
        open={updateOpen}
        onClose={closeUpdateDialog}
        title={updateTaskTitle}
        update={newTableUpdate} 
        toastrError={(message: string, title: string) => toastr.error(message, title)} 
        toastrSuccess={(message: string, title: string) => toastr.success(message, title)} />
    </>
  );
}

export default App;
