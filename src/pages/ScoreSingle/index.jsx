import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import DataContext from "../../context/dataContext";

const ScoreSingle = () => {
  const { inputValue } = useContext(DataContext);
  console.log(inputValue);

  const navigate = useNavigate();
  const navigateToSinglePlayer = () => {
    navigate('/create-room')
  }
  const navigateHome = () => {
    navigate('/')
  }

  return (
    <>
      <h1>{inputValue["username"]} Score:</h1>

      <h2>Previous Scores:</h2>
  
    {/* onClick navigate back to quiz start */}
    <button class="btn" onClick={navigateToSinglePlayer}>Play Again</button>

    {/* onClick navigate to home page */}
    <button class="btn" onClick={navigateHome}>Return Home</button>
    </>
  );
};

export default ScoreSingle;
