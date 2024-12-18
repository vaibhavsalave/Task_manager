import React, { useState } from 'react';
import '../../css/components/NewTaskForm/NewTaskForm.css';
import '../../css/common/buttons.css';

interface NewTaskFormProps {
  onAddTask: (title: string) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle('');
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new task..."
        className="task-input"
      />
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default NewTaskForm;