import React from "react";

const Subject = ({ questionData }) => {
  return (
    <>
      <h1>{questionData.length ? questionData[0].category : "loading"}</h1>
    </>
  );
};

export default Subject;
