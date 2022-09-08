import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./MultiPlayerScores.css";

const MultiPlayerScores = () => {
  /* state variables for: username & score */

  const moveBackToCategory = () => {
    navigate("/category");
  };

  const moveBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="header-name">Winner</h1>
      <div className="container-nav">
        <NavLink to="/leaderboard" className="link-leader">
          <img
            src="/alien.png"
            alt="start button"
            className="img-nav"
            width={30}
          />
          Leaderboard
          <img
            src="/alien.png"
            alt="start button"
            width={30}
            className="img-nav"
          />
        </NavLink>
      </div>
      <div className="container-score">
        <button onClick={moveBackToCategory} className="btn-score">
          Play again
        </button>
        <button onClick={moveBackToHome} className="btn-score">
          Return home
        </button>
      </div>
    </>
  );
};

export default MultiPlayerScores;
