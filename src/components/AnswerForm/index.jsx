import React from "react";
import "./Answer.css";

const AnswerForm = ({ handleAnswer, currentQuestion, questionData }) => {
  return (
    <>
      <div className="container-answer">
        {questionData.length
          ? questionData[currentQuestion]["incorrect_answers"].map(
              (d, index) => {
                return (
                  <button
                    className="btn-answer"
                    onClick={handleAnswer}
                    key={index}
                    value={d}
                  >
                    {d}
                  </button>
                );
              }
            )
          : "loading"}
        <button
          className="btn-answer"
          onClick={handleAnswer}
          value={
            questionData.length
              ? questionData[currentQuestion]["correct_answer"]
              : "loading"
          }
        >
          {questionData.length
            ? questionData[currentQuestion]["correct_answer"]
            : "loading"}
        </button>
      </div>
    </>
  );
};

export default AnswerForm;
