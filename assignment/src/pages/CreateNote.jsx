import { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ id: Date.now(), title, body });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 m-4 space-y-5 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create a New Note</h2>

      <input 
        type="text" 
        placeholder="Enter title..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
        required 
      />

      <textarea 
        placeholder="Write your note here..." 
        value={body} 
        onChange={(e) => setBody(e.target.value)}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
        required 
      />

      <button 
        type="submit" 
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
      >
        Add Note
      </button>
    </form>
  );
};

export default CreateNote;
