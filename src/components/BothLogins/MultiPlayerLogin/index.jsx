import React, { useState } from "react";

const MultiPlayerLogin = () => {
  // state variable for 'create room' inputs
  const [inputValues, setInputValues] = useState({
    username: "",
    room: "",
    playerNum: ""
  });
  // console.log("multiPlayer: ", inputValue);

  // state variable for submitting form
  const [submitForm, setSubmitForm] = useState(false);

  // state variable for validating form
  const [isValid, setIsValid] = useState(false);

  // username entered inside its input
  const handleUsernameInput = (e) => {
    setInputValues({ ...inputValues, username: e.target.value });
  };

  // room entered inside its input
  const handleRoomInput = (e) => {
    setInputValues({ ...inputValues, room: e.target.value });
  };

  // num of players entered inside its input
  const handlePlayerNumInput = (e) => {
    setInputValues({ ...inputValues, playerNum: e.target.value });
  };

  const handleSubmitForm = (e) => {
    // stops page refreshing
    e.preventDefault();

    // helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    if (inputValues.username && inputValues.room && inputValues.playerNum) {
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

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="username">Choose your Username</label>

        <input
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

        <label htmlFor="numOfPlayers">How many players?</label>
        <input
          type="number"
          id="numOfPlayers"
          value={inputValues.playerNum}
          onChange={handlePlayerNumInput}
        />

        {submitForm && !inputValues.playerNum ? (
          <p style={{ color: "red" }}>Please enter the number of players</p>
        ) : null}
        <br />

        <button>Done</button>
      </form>
    </>
  );
};

export default MultiPlayerLogin;

// for both multiplayer and single: render components based on previous choice
