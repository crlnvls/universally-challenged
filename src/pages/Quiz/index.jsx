import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";
import { Subject, Question, AnswerForm, QNumber } from "../../components";

const Quiz = () => {
  const { questionData, playerMode, score, setScore } = useContext(DataContext);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswers((answers) => [...answers, e.target.value]);

    if (e.target.value == questionData[currentQuestion]["correct_answer"]) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 == questionData.length) {
      if (playerMode === "single") {
        navigate("/score-single"); // if user chose single player
      } else {
        navigate("/scoreMulti"); // if user chose multi player
      }
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
