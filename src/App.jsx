import { Route, Routes } from "react-router-dom";

import { Home, NotFound, ScoreSingle } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/ScoreSingle" element={<ScoreSingle/>}></Route>
    </Routes>
  );
}

export default App;
