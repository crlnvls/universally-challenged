import React from "react";
import "./Subject.css";

const Subject = ({ questionData }) => {
  return (
    <>
      <h1 className="header-category">
        {questionData.length ? questionData[0].category : "loading"}
      </h1>
    </>
  );
};

export default Subject;
