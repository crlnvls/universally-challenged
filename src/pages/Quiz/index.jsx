import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const Quiz = () => {
  const { questionData, subject, playerMode } = useContext(DataContext);

  return <div>Quiz</div>;
};

export default Quiz;
