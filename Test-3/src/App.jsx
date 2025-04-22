import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
 
const App = () => {
  return (
    <Router>
      <TaskProvider>
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
          <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between shadow-md">
            <h1 className="text-xl font-bold">Task Manager</h1>
            <div className="flex gap-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/add" className="hover:underline">Add Task</Link>
            </div>
          </nav>
          <main className="max-w-3xl mx-auto py-6 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddTask />} />
            </Routes>
          </main>
        </div>
        <ToastContainer />
      </TaskProvider>
    </Router>
  );
};

export default App;