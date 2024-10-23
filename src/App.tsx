import './App.css';
import DeleteTaskButton from './components/deleteTaskButton.tsx';
import TaskTable from './components/taskTable.tsx';
import UpdateTaskButton from './components/updateTaskButton.tsx';

function App() {
  return (
    <>
      <TaskTable />
      <DeleteTaskButton />
      <UpdateTaskButton />
    </>
  );
}

export default App;
