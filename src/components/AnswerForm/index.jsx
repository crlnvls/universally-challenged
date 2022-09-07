import React from "react";

const AnswerForm = ({ handleAnswer, currentQuestion, questionData }) => {
  return (
    <>
      {questionData.length
        ? questionData[currentQuestion]["incorrect_answers"].map((d, index) => {
            return (
              <button onClick={handleAnswer} key={index} value={d}>
                {d}
              </button>
            );
          })
        : "loading"}
      <button
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
    </>
  );
};

export default AnswerForm;
