import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const Question = () => {
  const { questionData } = useContext(DataContext);

  return (
    <>
      <h3>{questionData.length ? questionData[0].question : "loading"}</h3>
    </>
  );
};

export default Question;
