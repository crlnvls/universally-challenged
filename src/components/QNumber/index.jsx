import React, { useContext } from "react";
import DataContext from "../../context/dataContext";

const QNumber = () => {
  const { questionData } = useContext(DataContext);

  return (
    <>
      <h5>Question{questionData.length}</h5>
    </>
  );
};

export default QNumber;
