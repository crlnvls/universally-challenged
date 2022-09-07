import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../context/dataContext";
import Sports from "./Sports";

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
      <div>
        <h1>Questions</h1>
        <Sports />
      </div>

      <button onClick={moveToNextPage}>
        click here for single or multi scores
      </button>
    </>
  );
};

export default Questions;
