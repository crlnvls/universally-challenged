import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";
import "./ScoreSingle.css";

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
      <div className="container-score">
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
