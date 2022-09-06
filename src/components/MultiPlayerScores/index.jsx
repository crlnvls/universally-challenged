import React from "react";
import { Link } from 'react-router-dom';

const MultiPlayerScores = () => {
  return (
    <>
      <h1>Winner</h1>

      <h3>shaquille.oatmeal.</h3>
      <i className="fa-solid fa-trophy"></i>

      <ul>
        <li>
          shaquille.oatmeal. <span>4/5</span>
        </li>
        <li>
          google_was_my_idea. <span>3/5</span>
        </li>
        <li>
          averagestudent <span>1/5</span>
        </li>
      </ul>

      <Link className="btn" to={"create-room"}>Play Again</Link>
      <Link className="btn" to={"/"}>Return Home</Link>
    </>
  );
};

export default MultiPlayerScores;
