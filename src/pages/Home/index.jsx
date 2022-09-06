import React, { useEffect, useState } from "react";
import "./style.css";

const Home = () => {
  // store if btn is single or multi

  const [player, setPlayer] = useState("");

  const handlePlayer = (e) => {
    e.preventDefault();
    setPlayer(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h1 className="neonText">Welcome To</h1>
      <a>
        <img
          src="https://blog.flamingtext.com/blog/2022/09/05/flamingtext_com_1662393421_527315134.png"
          border="0"
          alt="Universally Challenged Logo"
          title="Universally Challenged"
        />
      </a>

      <h2 className="neonText">Start Quiz</h2>

      <div className="homeButtons">
        <button className="btn" value="single" onClick={handlePlayer}>
          Single Player
        </button>

        <button className="btn" value="multi" onClick={handlePlayer}>
          Multi Player
        </button>
      </div>
    </>
  );
};

export default Home;
