import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";

import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //    <p>banane</p>
    //   </header>
    // </div>
  );
}

export default App;
