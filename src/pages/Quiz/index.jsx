import React, { useContext } from "react";

import { Questions } from "../../components";
import DataContext from "../../context/dataContext";

const Quiz = () => {
  const { questionData, subject, playerMode } = useContext(DataContext);

  return (
    <>
      <div>Quiz</div>

      <Questions />
    </>
  );
};

export default Quiz;
