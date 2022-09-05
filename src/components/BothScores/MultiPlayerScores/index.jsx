import React from "react";

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

      <button>Play again</button>
      <button>Return Home</button>
    </>
  );
};

export default MultiPlayerScores;
