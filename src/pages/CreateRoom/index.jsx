import React from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";

const CreateRoom = () => {
  return (
    <>
      {/* conditionally show based on btn clicked */}
      <SinglePlayerLogin />
      <MultiPlayerLogin />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
