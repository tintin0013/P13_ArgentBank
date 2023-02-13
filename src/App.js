import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Dashboard from "../src/pages/Dashboard";


// import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
