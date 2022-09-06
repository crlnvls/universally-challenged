import React, { useContext } from "react";

import { Questions } from "../../components";
import DataContext from "../../context/dataContext";

const Quiz = () => {
  const { questionData, subject } = useContext(DataContext);

  return (
    <>
      <div>Quiz</div>

      {/* vivian added this so this page links to the category page 🙂 */}
      <Questions />
    </>
  );
};

export default Quiz;
