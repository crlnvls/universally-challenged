import React from "react";
import { useNavigate } from "react-router-dom"; /* vivian added this so this page links to the category page 🙂 */

const Questions = () => {
  /* vivian added this so this page links to the category page 🙂 */
  const navigate = useNavigate();
  function moveToNextPageSingle() {
    navigate("/score-single");
  }
  function moveToNextPageMulti() {
    navigate("/scoreMulti");
  }

  return (
    <>
      <div>Questions</div>



      {/* vivian added this so this page links to the category page 🙂 */}
      <button onClick={moveToNextPageSingle}>For single</button>
      <button onClick={moveToNextPageMulti}>For Multi</button>
    </>
  );
};

export default Questions;
