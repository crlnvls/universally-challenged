import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const Subject = () => {
  const { questionData } = useContext(DataContext);
  console.log("Quiz page", questionData);
  return (
    <>
      <h1>{questionData.length ? questionData[0].category : "loading"}</h1>
    </>
  );
};

export default Subject;
