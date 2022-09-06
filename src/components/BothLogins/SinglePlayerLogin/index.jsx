import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SinglePlayerLogin.css";

const SinglePlayerLogin = () => {
  /* state variables for: username input, form submitting, form validation */
  const [inputValue, setInputValue] = useState({ username: "" });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);
  // console.log("singlePlayer: ", inputValue.username);

  const handleUsernameInput = (e) => {
    // updates user input
    setInputValue({ ...inputValue, username: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // the following below helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    if (inputValue.username) {
      setIsValid((prev) => {
        prev = true;
        return prev;
      });
    }
  };

  return (
    <>
      {submitForm && isValid ? null : (
        <h1 id="singlePlayerTitle">Choose your username</h1>
      )}

      {submitForm && isValid ? null : (
        <form onSubmit={handleSubmitForm} id="singlePlayerFormBg">
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter username"
            value={inputValue.username}
            onChange={handleUsernameInput}
          />
          {submitForm && !inputValue.username ? (
            <p>Please enter a username</p>
          ) : null}
          <br />

          {submitForm && isValid ? null : (
            <button>
              Submit<i className="fa-solid fa-paper-plane"></i>
            </button>
          )}
        </form>
      )}

      {submitForm && isValid ? (
        <p id="thankYouMessage">Thank you for submitting your username</p>
      ) : null}

      {submitForm && isValid ? (
        <Link to={"/category"}>
          <button id="nextBtn">Next</button>
        </Link>
      ) : null}
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
