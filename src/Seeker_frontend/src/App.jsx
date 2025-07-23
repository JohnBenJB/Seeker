import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Splash from "./components/splash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
