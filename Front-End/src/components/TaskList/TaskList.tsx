import React from 'react';
import { Task } from '../../types/Task';
import TaskItem from '../Task/TaskItem';
import { sortTasks } from '../../utils/taskUtils';
import '../../css/components/TaskList/TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDeleteTask }) => {
  const sortedTasks = sortTasks(tasks);

  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;