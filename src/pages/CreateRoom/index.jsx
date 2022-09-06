import React from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";

const CreateRoom = () => {
  return (
    <>
      {/* conditionally show based on which homepage btn is clicked */}
      <SinglePlayerLogin />
      <MultiPlayerLogin />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
