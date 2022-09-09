import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";

import "./style.css";

const Home = () => {
  const { handlePlayer } = useContext(DataContext);

  return (
    <>
      <h1 className="neonText">Welcome To</h1>
      <a>
        <img
          className="logo"
          src="https://blog.flamingtext.com/blog/2022/09/05/flamingtext_com_1662393421_527315134.png"
          border="0"
          alt="Universally Challenged Logo"
          title="Universally Challenged"
        />
      </a>

      <h2 className="neonText">Start Quiz</h2>

      <div className="homeButtons">
        <button className="btn" onClick={handlePlayer} value="single">
          Single Player
        </button>
        <button className="btn" onClick={handlePlayer} value="multi">
          Multi Player
        </button>
      </div>
    </>
  );
};

export default Home;

// ✅
