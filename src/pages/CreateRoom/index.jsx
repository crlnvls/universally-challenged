import React, { useContext } from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";

import DataContext from "../../context/dataContext";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);
  // if playerMode == "single" {render SinglePlayerRoom}
  // if playerMode == "multi" {render MultiPlayerRoom}

  // console.log("playerMode (create-room)==> ", playerMode);

  return (
    <>
      {/* conditionally show based on btn clicked */}
      {playerMode === "single" ? <SinglePlayerLogin /> : <MultiPlayerLogin />}
    </>
  );
};

export default CreateRoom;

// for both multiplayer and single: render components based on previous choice
