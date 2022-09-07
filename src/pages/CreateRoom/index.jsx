import React, { useContext } from "react";

import DataContext from "../../context/dataContext";
import MultiPlayerRoom from "./MultiPlayerRoom";
import SinglePlayerRoom from "./SinglePlayerRoom";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);
  // if playerMode == "single" {render SinglePlayerRoom}
  // if playerMode == "multi" {render MultiPlayerRoom}
  return (
    <>
      {/* conditionally show based on btn clicked */}
      <SinglePlayerRoom />
      <MultiPlayerRoom />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
