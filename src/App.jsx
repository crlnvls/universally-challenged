import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { CreateRoom } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (<div className="App">
    <CreateRoom/>
  </div>);
}

export default App;
