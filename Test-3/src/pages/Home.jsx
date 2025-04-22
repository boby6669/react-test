import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available. Add some!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;