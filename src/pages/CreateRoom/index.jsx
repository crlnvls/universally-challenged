import React, { useContext } from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";
import DataContext from "../../context/dataContext";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);
  // if playerMode == "single" {render SinglePlayerLogin}
  // if playerMode == "multi" {render MultiPlayerLogin}
  return (
    <>
      <SinglePlayerLogin />
      <MultiPlayerLogin />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
