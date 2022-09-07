import React, { useContext, useState } from "react";
import DataContext from "../../context/dataContext";

const AnswerForm = () => {
  const { questionData } = useContext(DataContext);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const calcScore = () => {
    let count = 0;
    if (answers == questionData[0]["correct_answer"]) {
      setScore(count++);
    }
    console.log(answers);
    console.log(score);
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswers(e.target.value);
    calcScore();
  };

  return (
    <>
      {questionData.length
        ? questionData[0]["incorrect_answers"].map((d, index) => {
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
          questionData.length ? questionData[0]["correct_answer"] : "loading"
        }
      >
        {questionData.length ? questionData[0]["correct_answer"] : "loading"}
      </button>
    </>
  );
};

export default AnswerForm;
