import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { toast } from 'react-toastify';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return toast.error('Task cannot be empty.');

    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Add a New Task</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
        placeholder="Enter task..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
