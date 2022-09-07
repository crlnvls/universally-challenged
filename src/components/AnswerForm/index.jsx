import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../context/dataContext";

const AnswerForm = () => {
  const { questionData } = useContext(DataContext);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const calcScore = () => {
    if (answers == questionData[currentQuestion]["correct_answer"]) {
      setScore(score + 1);
    }
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswers(e.target.value);
    setCurrentQuestion(currentQuestion + 1);
    calcScore();
  };

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
