import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task, index }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <li className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <span className="text-gray-800">{task}</span>
      <button
        onClick={() => deleteTask(index)}
        className="text-red-500 hover:text-red-700"
        title="Delete task"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TaskItem;