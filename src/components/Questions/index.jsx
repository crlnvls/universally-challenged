import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../context/dataContext";

const Questions = () => {
  const { playerMode } = useContext(DataContext);
  const navigate = useNavigate();
  function moveToNextPage() {
    if (playerMode === "single") {
      navigate("/score-single"); // for single players
    } else {
      navigate("/scoreMulti"); // for multi players
    }
  }

  return (
    <>
      <div>Questions</div>

      <button onClick={moveToNextPage}>
        click here for single or multi scores
      </button>
    </>
  );
};

export default Questions;
