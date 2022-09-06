import React, { useState } from "react";
import { Link } from "react-router-dom";

const MultiPlayerLogin = () => {
  /* state variables for: 'create room' inputs, form submitting, form validation */
  const [inputValues, setInputValues] = useState({
    username: "",
    room: "",
    playerNum: ""
  });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);
  // console.log("multiplayer: ", inputValues);

  const handleUsernameInput = (e) => {
    // updates username input
    setInputValues({ ...inputValues, username: e.target.value });
  };

  const handleRoomInput = (e) => {
    // updates room input
    setInputValues({ ...inputValues, room: e.target.value });
  };

  const handlePlayerNumInput = (e) => {
    // updates player num input
    setInputValues({ ...inputValues, playerNum: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // the following below helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    // ensures input values meet correct conditions for submission
    if (
      inputValues.username &&
      inputValues.room &&
      inputValues.playerNum &&
      parseInt(inputValues.playerNum) >= 2 &&
      parseInt(inputValues.playerNum) <= 5
    ) {
      setIsValid((prev) => {
        prev = true;
        return prev;
      });
    }
  };

  return (
    <>
      <h1>Create your room</h1>

      {submitForm && isValid ? (
        <p style={{ color: "green" }}>Thank you for creating your room</p>
      ) : null}

      {submitForm && isValid ? null : (
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="username">Choose your Username</label>

          <input
            autocomplete="off"
            type="text"
            placeholder="Enter username"
            id="username"
            value={inputValues.username}
            onChange={handleUsernameInput}
          />
          {submitForm && !inputValues.username ? (
            <p style={{ color: "red" }}>Please enter a username</p>
          ) : null}
          <br />

          <label htmlFor="room">Choose your room</label>
          <input
            autocomplete="off"
            type="text"
            placeholder="Enter room"
            id="room"
            value={inputValues.room}
            onChange={handleRoomInput}
          />
          {submitForm && !inputValues.room ? (
            <p style={{ color: "red" }}>Please enter a room</p>
          ) : null}
          <br />

          <label htmlFor="numOfPlayers">How many players (2-5)?</label>
          <input
            autocomplete="off"
            type="number"
            placeholder="Enter number of players"
            id="numOfPlayers"
            value={inputValues.playerNum}
            onChange={handlePlayerNumInput}
          />

          {(submitForm && !inputValues.playerNum) ||
          (submitForm && inputValues.playerNum.includes(".")) ||
          (submitForm && parseInt(inputValues.playerNum) < 2) ||
          (submitForm && parseInt(inputValues.playerNum) > 5) ? (
            <p style={{ color: "red" }}>
              Please select a whole number between 2 and 5
            </p>
          ) : null}
          <br />

          {submitForm && isValid ? null : <button>Submit</button>}
        </form>
      )}

      {submitForm && isValid ? (
        <Link to={"/waiting"}>
          <button>Next</button>
        </Link>
      ) : null}
    </>
  );
};

export default MultiPlayerLogin;

// for both multiplayer and single: render components based on previous choice
