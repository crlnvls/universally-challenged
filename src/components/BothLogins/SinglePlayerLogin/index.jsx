import React, { useState, useContext } from "react";
import DataContext from "../../../context/dataContext";
import { NavLink } from "react-router-dom";

const SinglePlayerLogin = () => {
  const { handleUsernameInput, inputValue } = useContext(DataContext);

  // state variable for single username input
  // const [inputValue, setInputValue] = useState({ username: "" });
  console.log("singlePlayer: ", inputValue);

  // state variable for submitting form
  const [submitForm, setSubmitForm] = useState(false);

  // state variable for validating form ensuring it's been completed correctly
  const [isValid, setIsValid] = useState(false);

  // username entered inside input
  // const handleUsernameInput = (e) => {
  //   setInputValue({ ...inputValue, username: e.target.value });
  // };

  const handleSubmitForm = (e) => {
    // stops page refreshing
    e.preventDefault();

    // helps validate form before submission
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
      <h1>Choose your username</h1>

      {submitForm && isValid ? (
        <p style={{ color: "green" }}>Thank you for submitting your username</p>
      ) : null}
      <NavLink to="/score-single">Score</NavLink>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter username"
          value={inputValue.username}
          onChange={handleUsernameInput}
        />
        {submitForm && !inputValue.username ? (
          <p style={{ color: "red" }}>Please enter a username</p>
        ) : null}
        <br />

        <button>Done</button>
      </form>
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
