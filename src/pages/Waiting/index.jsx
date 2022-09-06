import React, { useContext } from "react";
import DataContext from "../../context/dataContext";
import "./Waiting.css";

const Waiting = () => {
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
      </div>
    </>
  );
};

export default Waiting;
