import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Home from "./pages/Home";
import PullRequests from "./pages/PullRequests";
import Repositories from "./pages/Repositories";
import Projects from "./pages/Projects";
import CreateIssue from "./pages/CreateIssue";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/" /> : <Auth />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/pull-requests"
            element={isAuthenticated ? <PullRequests /> : <Navigate to="/" />}
          />
          <Route
            path="/repositories"
            element={isAuthenticated ? <Repositories /> : <Navigate to="/" />}
          />
          <Route
            path="/projects"
            element={isAuthenticated ? <Projects /> : <Navigate to="/" />}
          />
          <Route
            path="/create-issue"
            element={isAuthenticated ? <CreateIssue /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      {isAuthenticated && <Footer />}
    </div>
  );
}
