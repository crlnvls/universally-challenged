import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; /* vivian added this so this page links to the category page 🙂 */

import DataContext from "../../context/dataContext";
import "./Waiting.css";

const Waiting = () => {
  /* vivian added this so this page links to the category page 🙂 */
  const navigate = useNavigate();
  function moveToNextPage() {
    navigate("/quiz");
  }

  const { playerMode } = useContext(DataContext);

  return (
    <>
      <div className="waiting-body">
        <h1 className="header-waiting">Waiting Room </h1>
        <div className="container-pacman">
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
          <div className="path"></div>
        </div>

        {/* vivian added this so this page links to the category page 🙂 */}
        <button onClick={moveToNextPage}>Let's play</button>
      </div>
    </>
  );
};

export default Waiting;
