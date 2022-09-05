import React from "react";

const SinglePlayerLogin = () => {
  return (
    <>
      <h1>Choose your username</h1>
      <form>
        <input type="text" placeholder="Enter username" />
        <button>Done</button>
      </form>
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
