import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";
import "./ScoreSingle.css";
import { NavLink } from "react-router-dom";

const ScoreSingle = () => {
  const { inputValue, score } = useContext(DataContext);

  const navigate = useNavigate();
  const navigateToSinglePlayer = () => {
    navigate("/category");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="header-name">{inputValue["username"]}</h1>
      <h2 className="scores"> Score: {score}</h2>
      <div className="container-pacman">
        <span class="loader"></span>
      </div>
      <div className="container-score">
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

        {/* onClick navigate back to quiz start */}
        <button className="btn-score" onClick={navigateToSinglePlayer}>
          Play Again
        </button>

        {/* onClick navigate to home page */}
        <button className="btn-score" onClick={navigateHome}>
          Return Home
        </button>
      </div>
    </>
  );
};

export default ScoreSingle;
