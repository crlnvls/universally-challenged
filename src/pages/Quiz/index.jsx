import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";
import { Subject, Question, AnswerForm, QNumber } from "../../components";

const Quiz = () => {
  const { questionData } = useContext(DataContext);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

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
    if (currentQuestion + 1 == questionData.length) {
      navigate("/score-single");
    }
  };
  return (
    <>
      <Subject questionData={questionData} />
      <Question currentQuestion={currentQuestion} questionData={questionData} />
      <AnswerForm
        handleAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        questionData={questionData}
      />
      <QNumber currentQuestion={currentQuestion} questionData={questionData} />
    </>
  );
};
export default Quiz;
