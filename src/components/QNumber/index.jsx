import React from "react";
import "./QNumber.css";

const QNumber = ({ currentQuestion }) => {
  return (
    <>
      <button className="q-number">Question {currentQuestion + 1}</button>
    </>
  );
};

export default QNumber;
