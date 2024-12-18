import { Task } from '../types/Task';

export const createTask = (title: string): Task => ({
  id: Date.now(),
  title,
  completed: false,
});

export const toggleTaskComplete = (tasks: Task[], id: number): Task[] =>
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

export const deleteTask = (tasks: Task[], id: number): Task[] =>
  tasks.filter(task => task.id !== id);

export const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    // Sort by completion status (incomplete first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then sort by id (newest first)
    return b.id - a.id;
  });
};