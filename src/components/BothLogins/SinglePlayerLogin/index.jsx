import React, { useState } from "react";

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
      <h1>Choose your username</h1>

      {submitForm && isValid ? (
        <p style={{ color: "green" }}>Thank you for submitting your username</p>
      ) : null}

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
