import { Routes, Route } from "react-router-dom";

import { CreateRoom, ScoreMulti } from "./pages";
import "./App.css";

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
