import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const AnswerForm = () => {
  const { questionData } = useContext(DataContext);
  console.log("Quiz page", questionData);

  return (
    <>
      {questionData.length
        ? questionData[0]["incorrect_answers"].map((d, index) => {
            <div key={index}>{d}</div>;
          })
        : "loading"}
    </>
  );
};

export default AnswerForm;
