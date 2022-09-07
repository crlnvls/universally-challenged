import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MultiPlayerScores = () => {
  /* state variables for: username & score */
  const [allPlayers, setAllPlayers] = useState({});

  function getAllPlayers() {
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
  }
  getAllPlayers();

  function findWinner() {
    let winnerObj = allPlayers.users.reduce(function (prev, current) {
      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    });

    return winnerObj;
  }

  return (
    <>
      <h1>Winner</h1>

      {/* works when cut out, browser refreshed, pasted back in, vs code saved 😩*/}
      <h3>{findWinner().username}</h3>
      <i className="fa-solid fa-trophy"></i>

      <ul>
        {allPlayers.users.map((oneUserObj) => {
          return (
            <li key={oneUserObj._id}>
              <span>{oneUserObj.username}</span>{" "}
              <span>{oneUserObj.scores.animals}/5</span>
            </li>
          );
        })}
      </ul>
      {/* works when cut out, browser refreshed, pasted back in, vs code saved 😩*/}

      <button>
        <Link to={"/createRoom"}>Play again</Link>
      </button>

      <button>
        <Link to={"/"}>Return home</Link>
      </button>
    </>
  );
};

export default MultiPlayerScores;
