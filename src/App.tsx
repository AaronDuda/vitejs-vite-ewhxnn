import './App.css';
import DeleteButton from './components/buttons/deleteButton.tsx';
import TaskTable from './components/taskTable.tsx';
import UpdateButton from './components/buttons/updateButton.tsx';

function App() {
  return (
    <>
      <TaskTable />
      <DeleteButton />
      <UpdateButton />
    </>
  );
}

export default App;
