import React from "react";
import { Route, Routes } from "react-router-dom";
import Temperature from './Temperature.js'
import Profile from "./Profile";
import Navbar from "./Navbar.js";
import News from "./News.js";
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Jobs from "./Jobs.js";
import Contact from './Contact.js'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/temperature" element={<Temperature/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/jobs" element={<Jobs/>} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;