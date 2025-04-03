
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NotesProvider } from "./context/NotesContext";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import Navbar from "./components/Navbar";

function Login({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && email) {
      onLogin(userId, email);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">User ID:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <label className="block text-gray-700 dark:text-gray-300 mt-3 mb-2">Email ID:</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = (userId, email) => {
    setUserDetails({ userId, email });
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
            <Navbar />
            {!isLoggedIn ? (
              <Login onLogin={handleLogin} />
            ) : (
              <main className="flex-grow container mx-auto p-4 max-w-4xl">
                <div className="bg-amber-600 p-4 rounded-lg shadow">
                  <h2 className="text-lg font-semibold">User Details</h2>
                  <p><strong>User ID:</strong> {userDetails.userId}</p>
                  <p><strong>Email:</strong> {userDetails.email}</p>
                </div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/create" element={<CreateNote />} />
                  <Route path="/note/:id" element={<NoteDetails />} />
                </Routes>
              </main>
            )}
          </div>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
