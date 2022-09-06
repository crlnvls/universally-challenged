import React from "react";
import { useNavigate } from 'react-router-dom';


const ScoreSingle = () => {

  const navigate = useNavigate();
  
  const navigateToSinglePlayer = () => {
    navigate('/create-room')
  }

  const navigateHome = () => {
    navigate('/')
  }

  return <>
    <h1>Your Score:</h1>
   
    {/* Pseudo-code to diplay results from quiz round */}

    <h2>Previous Scores:</h2>
  
    {/* Pseudo-code to diplay results from previous quiz rounds */}

  
    {/* onClick navigate back to quiz start */}
    <button class="btn" onClick={navigateToSinglePlayer}>Play Again</button>

    {/* onClick navigate to home page */}
    <button class="btn" onClick={navigateHome}>Return Home</button>

    </>;

};


export default ScoreSingle;
