
import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home, NotFound, ScoreSingle, CreateRoom, ScoreMulti, Subjects } from "./pages";


function App() {
  return (
    <Routes>

      <Route path="/category" element={<Subjects />}></Route>

      <Route path="/" element={<Home />}></Route>
      <Route path="/ScoreSingle" element={<ScoreSingle/>}></Route>
      
      <Route path="createRoom" element={<CreateRoom />}></Route>
      <Route path="scoreMulti" element={<ScoreMulti />}></Route>
      <Route path="*" element={<NotFound />}></Route>


    </Routes>
  );
}

export default App;
