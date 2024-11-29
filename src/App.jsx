import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans p-8 md:mx-48">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
