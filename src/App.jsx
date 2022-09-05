import { Routes, Route } from "react-router-dom";

import { Home, NotFound, ScoreMulti, CreateRoom, ScoreSingle } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/ScoreSingle" element={<ScoreSingle />}></Route>

      <Route path="createRoom" element={<CreateRoom />}></Route>
      <Route path="scoreMulti" element={<ScoreMulti />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
