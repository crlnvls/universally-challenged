import React from "react";

const Question = ({ currentQuestion, questionData }) => {
  return (
    <>
      <h3>
        {questionData.length
          ? questionData[currentQuestion].question
          : "loading"}
      </h3>
    </>
  );
};

export default Question;
