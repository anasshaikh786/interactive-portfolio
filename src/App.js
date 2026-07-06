import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
