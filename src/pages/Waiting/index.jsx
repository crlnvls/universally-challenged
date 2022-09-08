import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../context/dataContext";
import "./Waiting.css";

const Waiting = () => {
  const navigate = useNavigate();
  function moveToNextPage() {
    navigate("/quiz");
  }
  function back() {
    navigate(-1);
  }

  return (
    <>
      <h1 className="header-waiting">Waiting Room </h1>

      <button onClick={moveToNextPage}>Let's play</button>
      <button onClick={back}>Back</button>
    </>
  );
};

export default Waiting;
