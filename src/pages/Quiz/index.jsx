import React, { useContext, useState } from "react";
import DataContext from "../../context/dataContext";
import { Subject, Question, AnswerForm, QNumber } from "../../components";

const Quiz = () => {
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
      <Subject />
      <Question />
      <AnswerForm
        handleAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        questionData={questionData}
      />
      <QNumber />
    </>
  );
};
export default Quiz;
