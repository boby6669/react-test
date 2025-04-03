import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="p-4 flex justify-between bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Notes App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/create" className="hover:underline">Create Note</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-blue-500 text-white rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};


import { NotesContext } from "../context/NotesContext";

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="p-4 border rounded-lg shadow-md my-4">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p>{note.body.substring(0, 50)}...</p>
      <div className="mt-2 space-x-2">
        <Link to={`/note/${note.id}`} className="text-blue-500">View</Link>
        <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default Navbar;