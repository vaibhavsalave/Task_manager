import React from 'react';
import { Task } from '../../types/Task';
import '../../css/components/Task/TaskItem.css';
import '../../css/common/buttons.css';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`btn btn-success ${task.completed ? 'completed' : ''}`}
        >
          {task.completed ? 'Completed' : 'Mark as Done'}
        </button>
        <button 
          onClick={() => onDeleteTask(task.id)} 
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;