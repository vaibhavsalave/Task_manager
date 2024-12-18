import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import { Task } from './types/Task';
import { createTask, toggleTaskComplete, deleteTask } from './utils/taskUtils';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Task Manager', completed: false },
  ]);

  const handleAddTask = (title: string) => {
    const newTask = createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id: number) => {
    setTasks(toggleTaskComplete(tasks, id));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(deleteTask(tasks, id));
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <NewTaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;