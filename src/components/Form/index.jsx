import React, { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [subject, setSubject] = useState(27);
  const [number, setNumber] = useState("27");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionData, setQuestionData] = useState([]);

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    async function getQuiz(subject, number, difficulty) {
      try {
        const result = await axios.get(
          `https://opentdb.com/api.php?amount=${number}&category=${subject}&difficulty=${difficulty}&type=multiple`
        );
        console.log(result.data);
        setQuestionData(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getQuiz(subject, number, difficulty);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="animals">Animals</label>
        <input
          type="radio"
          id="animals"
          name="animals"
          value="27"
          onChange={handleChangeSubject}
        ></input>
        <br />
        <label htmlFor="sports">Sports</label>
        <input
          type="radio"
          id="sports"
          name="sports"
          value="21"
          onChange={handleChangeSubject}
        ></input>
        <br />
        <label htmlFor="general">General Knowledge</label>
        <input
          type="radio"
          id="general"
          name="general"
          value="9"
          onChange={handleChangeSubject}
        ></input>
        <br />
        <label htmlFor="number">Number of questions</label>
        <input
          type="number"
          id="number"
          name="number"
          min="5"
          max="10"
          onChange={handleChangeNumber}
        />
        <br />
        <label htmlFor="difficulty">Game Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleChangeDifficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard </option>
        </select>
        <br />
        <input type="submit" value="Start" />
      </form>
    </>
  );
}

export default Form;
