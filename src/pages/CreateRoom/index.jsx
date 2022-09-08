import React, { useContext } from "react";
import { MultiPlayerLogin, SinglePlayerLogin } from "../../components";

import DataContext from "../../context/dataContext";

const CreateRoom = () => {
  const { playerMode } = useContext(DataContext);

  return (
    <>
      {playerMode === "single" ? <SinglePlayerLogin /> : <MultiPlayerLogin />}
    </>
  );
};

export default CreateRoom;

// ✅
