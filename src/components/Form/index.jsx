import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import DataContext from "../../context/dataContext";
import "./Form.css";

function Form() {
  const { playerMode } = useContext(DataContext);
  const navigate = useNavigate();
  function moveToNextPage() {
    if (playerMode === "single") {
      navigate("/quiz"); // for single players
    } else {
      navigate("/waiting"); // for multi players
    }
  }

  const {
    handleChangeNumber,
    handleChangeDifficulty,
    handleChangeSubject,
    handleSubmit,
    number
  } = useContext(DataContext);

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
          <button className="submit-btn" type="submit" onClick={moveToNextPage}>
            Start
            <img
              className="img-submit"
              src="/arrowheads.png"
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
