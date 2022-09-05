import { Route, Routes } from "react-router-dom";

import { Home, NotFound } from "./pages";
import "./App.css";
import { CreateRoom, ScoreMulti } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="createRoom" element={<CreateRoom />}></Route>
      <Route path="scoreMulti" element={<ScoreMulti />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
