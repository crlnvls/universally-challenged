import React from "react";

const MultiPlayerLogin = () => {
  return (
    <>
      <h1>Create your room</h1>

      <form>
        <label htmlFor="username">Choose your Username</label>
        <input type="text" placeholder="Enter username" id="username" />

        <label htmlFor="room">Choose your room</label>
        <input type="text" placeholder="Enter room" id="room" />

        <label htmlFor="numOfPlayers">How many players?</label>
        <select name="numOfPlayers" id="numOfPlayers">
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
