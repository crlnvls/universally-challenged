import React, { useContext, useNavigate } from "react";
import DataContext from "../../context/dataContext";

const ScoreSingle = () => {
  const { inputValue } = useContext(DataContext);
  console.log(inputValue);

  return (
    <>
      <h1>{inputValue["username"]} Score:</h1>

      {/* Pseudo-code to display results from quiz round */}

      <h2>Previous Scores:</h2>

      {/* Pseudo-code to display results from previous quiz rounds */}

      {/* onClick navigate back to quiz start */}
      <button>Play Again</button>

      {/* onClick navigate to home page */}
      <button>Return Home</button>
    </>
  );
};

export default ScoreSingle;
