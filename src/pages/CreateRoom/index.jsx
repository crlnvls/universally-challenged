import React from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";

const CreateRoom = () => {
  return (
    <>
      <SinglePlayerLogin />
      <MultiPlayerLogin />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
