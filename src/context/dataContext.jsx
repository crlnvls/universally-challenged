import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [subject, setSubject] = useState(9);
  const [number, setNumber] = useState("5");
  const [difficulty, setDifficulty] = useState("easy");
  const [questionData, setQuestionData] = useState([]);
  const [inputValue, setInputValue] = useState({ username: "" });

  const handleChangeSubject = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    async function getQuiz(subject, number, difficulty) {
      try {
        const result = await axios.get(
          `https://opentdb.com/api.php?amount=${number}&category=${subject}&difficulty=${difficulty}&type=multiple`
        );
        console.log(result.data);
        setQuestionData(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getQuiz(subject, number, difficulty);
  };

  const handleUsernameInput = (e) => {
    setInputValue({ inputValue, username: e.target.value });
  };

  return (
    <DataContext.Provider
      value={{
        handleChangeSubject,
        handleChangeNumber,
        handleChangeDifficulty,
        handleSubmit,
        handleUsernameInput,
        inputValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
