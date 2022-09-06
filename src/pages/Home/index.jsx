import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Home = () => {
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
        <Link className="btn" to={"create-room"}>Single Player</Link>

        <Link className="btn" to={"create-room"}>Multi Player</Link>
      </div>
    </>
  );
};

export default Home;
