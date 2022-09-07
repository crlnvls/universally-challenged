import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const AnswerForm = () => {
  const { questionData } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      {questionData.length
        ? questionData[0]["incorrect_answers"].map((d, index) => {
            return (
              <button onClick={handleSubmit} key={index} value={d}>
                {d}
              </button>
            );
          })
        : "loading"}
      <button
        onClick={handleSubmit}
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
