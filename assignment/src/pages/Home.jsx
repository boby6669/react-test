import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const { notes, loading } = useContext(NotesContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <section className="text-center p-8 bg-blue-500 dark:bg-blue-900 text-white rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-extrabold">आपका स्वागत है! 😊🙏</h2>
        <p className="mt-2 text-lg">welcome to page ....  </p>
      </section>

      {/* Notes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-center text-gray-500 col-span-4">Loading your notes...</p>
        ) : notes.length === 0 ? (
          <p className="text-center text-gray-500 col-span-4">No notes available. Add some!</p>
        ) : (
          notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
