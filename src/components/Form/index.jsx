import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Form.css";

function Form() {
  const [subject, setSubject] = useState(9);
  const [number, setNumber] = useState("5");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionData, setQuestionData] = useState([]);

  const handleChangeSubject = (e) => {
    e.preventDefault();
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
        <div className="container">
          <button
            className="btn-category"
            value="9"
            onClick={handleChangeSubject}
          >
            General Knowledge
          </button>

          <button
            className="btn-category"
            value="27"
            onClick={handleChangeSubject}
          >
            Animals
          </button>

          <button
            className="btn-category"
            value="21"
            onClick={handleChangeSubject}
          >
            Sports
          </button>

          <button
            className="btn-category"
            value="18"
            onClick={handleChangeSubject}
          >
            Computers
          </button>

          <button
            className="btn-category"
            value="15"
            onClick={handleChangeSubject}
          >
            Video Games
          </button>

          <button
            className="btn-category"
            value="11"
            onClick={handleChangeSubject}
          >
            Film
          </button>
        </div>
        <p>Number of questions</p>
        <label htmlFor="number-questions"></label>
        <input
          type="number"
          id="number-questions"
          name="number-questions"
          min={5}
          max={10}
          value={number}
          onChange={handleChangeNumber}
        />
        <p>Game Difficulty</p>
        <label htmlFor="difficulty"></label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleChangeDifficulty}
          required
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard </option>
        </select>
        <div>
          <button className="submit-btn" type="submit">
            Start
            <img
              className="img-submit"
              src="/public/arrowheads.png"
              alt=""
              width={30}
            />
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
