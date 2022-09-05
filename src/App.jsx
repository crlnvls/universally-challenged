import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CreateRoom, ScoreMulti } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CreateRoom />
      <ScoreMulti />
    </div>
  );
}

export default App;
