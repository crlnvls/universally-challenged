import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Home,
  NotFound,
  ScoreSingle,
  CreateRoom,
  ScoreMulti,
  Subjects,
} from "./pages";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/category" element={<Subjects />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/ScoreSingle" element={<ScoreSingle />}></Route>

        <Route path="createRoom" element={<CreateRoom />}></Route>
        <Route path="scoreMulti" element={<ScoreMulti />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
