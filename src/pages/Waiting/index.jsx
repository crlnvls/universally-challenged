import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../context/dataContext";
import "./Waiting.css";

const Waiting = () => {
  const navigate = useNavigate();
  function moveToNextPage() {
    navigate("/quiz");
  }

  const { playerMode } = useContext(DataContext);

  return (
    <>
      <div className="waiting-body">
        <h1 className="header-waiting">Waiting Room </h1>
        <div className="container-pacman">
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
        </div>

        <button onClick={moveToNextPage}>Let's play</button>
        <button onClick={navigate(-1)}>Back</button>
      </div>
    </>
  );
};

export default Waiting;
