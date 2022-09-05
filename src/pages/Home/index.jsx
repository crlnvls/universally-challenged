import React from "react";

// import Login from "../Login";
import './style.css'


const Home = () => {
  return <>
    <h1 className='neonText'>Welcome To</h1>
    <a target="_top" href="https://flamingtext.com/" ><img src="https://blog.flamingtext.com/blog/2022/09/05/flamingtext_com_1662389687_527315131.png" border="0" alt="Logo Design by FlamingText.com" title="Logo Design by FlamingText.com"/></a>


    <h2 className='neonText'>Start Quiz</h2>

    <div className="homeButtons">
    <button>Single Player</button>

    <button>Multi Player</button>
    </div>

  </>;
};

export default Home;
