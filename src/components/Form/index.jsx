import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; /* vivian added this so this page links to the category page 🙂 */

import DataContext from "../../context/dataContext";
import "./Form.css";

function Form() {
  /* vivian added this so this page links to the category page 🙂 */
  const navigate = useNavigate();
  function moveToNextPage() {
    navigate("/waiting");
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
          {/* vivian added the 'onClick={moveToNextPage}' so this page links to the category page 🙂 */}
          <button className="submit-btn" type="submit" onClick={moveToNextPage}>
            Start
            <img
              className="img-submit"
              src="/arrowheads.png" // vivian changed this to remove react warning error in terminal
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
