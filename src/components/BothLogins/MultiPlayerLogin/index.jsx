import React, { useState } from "react";

const MultiPlayerLogin = () => {
  // state variable for 'create room' inputs
  const [inputValues, setInputValues] = useState({
    username: "",
    room: "",
    playerNum: 0
  });
  console.log("multiPlayer: ", inputValues);

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

  // stops page refreshing
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Create your room</h1>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="username">Choose your Username</label>

        <input
          type="text"
          placeholder="Enter username"
          id="username"
          value={inputValues.username}
          onChange={handleUsernameInput}
        />

        <label htmlFor="room">Choose your room</label>
        <input
          type="text"
          placeholder="Enter room"
          id="room"
          value={inputValues.room}
          onChange={handleRoomInput}
        />

        <label htmlFor="numOfPlayers">How many players?</label>
        <select
          name="numOfPlayers"
          id="numOfPlayers"
          value={inputValues.playerNum}
          onChange={handlePlayerNumInput}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button>Done</button>
      </form>
    </>
  );
};

export default MultiPlayerLogin;

// for both multiplayer and single: render components based on previous choice
