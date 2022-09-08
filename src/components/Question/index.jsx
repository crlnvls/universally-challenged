import React from "react";
import "./Question.css";

const Question = ({ currentQuestion, questionData }) => {
  return (
    <>
      {questionData.length ? (
        <h3
          className="question"
          dangerouslySetInnerHTML={{
            __html: questionData[currentQuestion].question,
          }}
        ></h3>
      ) : (
        "loading"
      )}
    </>
  );
};

export default Question;
