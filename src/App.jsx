import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import * as Pages from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Subjects />}></Route>
    </Routes>
  );
}

export default App;
