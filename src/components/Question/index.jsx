import React from "react";
import "./Question.css";

const Question = ({ currentQuestion, questionData }) => {
  return (
    <>
      <h3 className="question">
        {questionData.length
          ? questionData[currentQuestion].question
          : "loading"}
      </h3>
    </>
  );
};

export default Question;
