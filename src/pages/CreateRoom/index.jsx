import React, { useContext } from "react";

import DataContext from "../../context/dataContext";
import CreateMultiRoom from "./CreateMultiRoom";
import CreateSingleRoom from "./CreateSingleRoom";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);
  // if playerMode == "single" {render SinglePlayerLogin}
  // if playerMode == "multi" {render MultiPlayerLogin}
  return (
    <>
      {/* conditionally show based on btn clicked */}
      <CreateSingleRoom />
      <CreateMultiRoom />
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
