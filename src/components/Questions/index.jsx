import React from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  function moveToNextPageSingle() {
    navigate("/score-single");
  }
  function moveToNextPageMulti() {
    navigate("/scoreMulti");
  }

  return (
    <>
      <div>Questions</div>

      <button onClick={moveToNextPageSingle}>For single</button>
      <button onClick={moveToNextPageMulti}>For Multi</button>
    </>
  );
};

export default Questions;
