import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-indigo-950/90 backdrop-blur-md text-gray-200 sticky top-0 z-50 shadow-lg border-b border-indigo-800">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          CollabTool
        </Link>

        {/* Hamburger for small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu links for medium+ screens */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/pull-requests" className="hover:text-indigo-400 transition">Pull Requests</Link>
          <Link to="/repositories" className="hover:text-indigo-400 transition">Repositories</Link>
          <Link to="/projects" className="hover:text-indigo-400 transition">Projects</Link>
          <Link to="/create-issue" className="hover:text-indigo-400 transition">Create Issue</Link>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md md:ml-4"
        >
          Logout
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-950/95 border-t border-indigo-800">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 hover:bg-indigo-800 transition"
          >
            Home
          </Link>
          <Link
            to="/pull-requests"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 hover:bg-indigo-800 transition"
          >
            Pull Requests
          </Link>
          <Link
            to="/repositories"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 hover:bg-indigo-800 transition"
          >
            Repositories
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 hover:bg-indigo-800 transition"
          >
            Projects
          </Link>
          <Link
            to="/create-issue"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 hover:bg-indigo-800 transition"
          >
            Create Issue
          </Link>
        </div>
      )}
    </nav>
  );
}
