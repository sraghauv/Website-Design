import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, About, Contact, Navbar, Events } from "./components";
import "./index.css"; // Ensure this line is present at the top of your entry file

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar will be fixed and overlay other elements */}
        <Navbar />

        {/* The content section will be pushed down so it is not hidden under the navbar */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
