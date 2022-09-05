import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Home />}></Route>
        <Route path="create-room" element={<CreateRoom />}></Route>
        <Route path="/category" element={<Subjects />}></Route>
        <Route path="/score-single" element={<ScoreSingle />}></Route>
        <Route path="score-multi" element={<ScoreMulti />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
