import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";

const ScoreSingle = () => {
  const { inputValue, score } = useContext(DataContext);

  const navigate = useNavigate();
  const navigateToSinglePlayer = () => {
    navigate("/create-room");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>
        {inputValue["username"]} Score: {score}
      </h1>

      <h2>Previous Scores:</h2>

      {/* onClick navigate back to quiz start */}
      <button className="btn" onClick={navigateToSinglePlayer}>
        Play Again
      </button>

      {/* onClick navigate to home page */}
      <button className="btn" onClick={navigateHome}>
        Return Home
      </button>
    </>
  );
};

export default ScoreSingle;
