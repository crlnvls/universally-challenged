import React from "react";

import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Home, NotFound, ScoreSingle, CreateRoom, ScoreMulti, Subjects } from "./pages";

=======
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
>>>>>>> cd980f7a2c93e98ccb95e46cc898943e6190503a

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
