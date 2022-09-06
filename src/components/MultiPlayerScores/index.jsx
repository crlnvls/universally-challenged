import React from "react";
import { Link } from "react-router-dom";

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

      <Link to={"/category"}><button>Play again</button></Link>
      <Link to={"/"}><button>Return home</button></Link>
    </>
  );
};

export default MultiPlayerScores;
