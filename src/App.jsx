import { Route, Routes } from "react-router-dom";

import { Home, NotFound } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
