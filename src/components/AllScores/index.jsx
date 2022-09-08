import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllScores.css";

const AllScores = () => {
  const [allPlayers, setAllPlayers] = useState({});
  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  };

  const moveBackToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://universallychallenged.herokuapp.com/users"
      );
      const json = await response.json();
      setAllPlayers((prev) => {
        prev = json;
        return prev;
      });
    }
    fetchUsers();
  }, []);

  function findWinner() {
    let winnerName;

    // BUG
    const maxScore = Math.max(
      ...allPlayers.users.map((singleObj) => {
        return singleObj.scores.sports;
      })
    );
    // console.log("maxScore==> ", maxScore);

    for (let i = 0; i < allPlayers.users.length; i++) {
      let singleObj = allPlayers.users[i];
      if (maxScore === singleObj.scores.sports) {
        winnerName = singleObj.username;
      }
    }

    // console.log("winnerName==> ", winnerName);
    return winnerName;
  }

  const Desc = () => {};

  return (
    <>
      {" "}
      {Object.keys(allPlayers).length !== 0 ? (
        <section>
          <h1 className="header-leader">Leaderboard</h1>
          <h3 className="winner">
            <i className="fa-solid fa-trophy trophy"></i>
            {findWinner()}
            <i className="fa-solid fa-trophy trophy"></i>
          </h3>
          <div className="container-leader">
            <ul id="multiPlayerContainer">
              {allPlayers.users.map((oneUserObj) => {
                return (
                  <li key={oneUserObj._id}>
                    <div>{oneUserObj.username}</div>
                    <div className="gap-leader">{oneUserObj.scores.sports}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="btnContainer">
            <button onClick={moveBack} className="btn-leader">
              Back
            </button>
            <button onClick={moveBackToHome} className="btn-leader">
              Return home
            </button>
          </div>
        </section>
      ) : (
        <section id="winnerPageSectionContainer">
          <h3 id="winningUsername">Loading</h3>
        </section>
      )}
    </>
  );
};

export default AllScores;
