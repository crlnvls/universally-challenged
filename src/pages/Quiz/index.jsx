import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/dataContext";
import { Subject, Question, AnswerForm, QNumber } from "../../components";

const Quiz = () => {
  const { questionData, playerMode } = useContext(DataContext);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const calcScore = () => {
    console.log(questionData[currentQuestion]["correct_answer"]);
    console.log(answers[currentQuestion]);
    console.log(answers[0]);
    console.log(answers[1]);
    console.log(answers[2]);
    console.log(answers[3]);
    console.log(answers[4]);
    // Answers is not behaving properly BUG
    if (answers == questionData[currentQuestion]["correct_answer"]) {
      setScore(score + 1);
      console.log("ducks");
    }
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    setAnswers((answers) => [...answers, e.target.value]);
    setCurrentQuestion(currentQuestion + 1);
    calcScore();
    if (currentQuestion + 1 == questionData.length) {
      if (playerMode === "single") {
        navigate("/score-single"); // if user chose single player
      } else {
        navigate("/scoreMulti"); // if user chose multi player
      }
    }
    // console.log(answers);
    console.log(score);
  };
  return (
    <>
      <Subject questionData={questionData} />
      <QNumber currentQuestion={currentQuestion} questionData={questionData} />
      <Question currentQuestion={currentQuestion} questionData={questionData} />
      <AnswerForm
        handleAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        questionData={questionData}
      />
    </>
  );
};
export default Quiz;
