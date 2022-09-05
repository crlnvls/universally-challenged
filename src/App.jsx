import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, CreateRoom, Subjects, ScoreSingle, ScoreMulti, NotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="createRoom" element={<CreateRoom />}></Route>
      
      <Route path="/category" element={<Subjects />}></Route>   
      
      <Route path="/ScoreSingle" element={<ScoreSingle />}></Route>      
      <Route path="scoreMulti" element={<ScoreMulti />}></Route>
      <Route path="*" element={<NotFound />}></Route>      
    </Routes>
  );
}

export default App;
