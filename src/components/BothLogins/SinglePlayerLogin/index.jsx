import React, { useState } from "react";

const SinglePlayerLogin = () => {
  // state variable for single username input
  const [inputValue, setInputValue] = useState({ username: "" });
  console.log("singlePlayer: ", inputValue);

  // stops page refreshing
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  // username entered inside input
  const handleUsernameInput = (e) => {
    setInputValue({ username: e.target.value });
  };

  return (
    <>
      <h1>Choose your username</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter username"
          value={inputValue.username}
          onChange={handleUsernameInput}
        />
        <button>Done</button>
      </form>
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
