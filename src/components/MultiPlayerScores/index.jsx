import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MultiPlayerScores = () => {
  /* state variables for: username & score */
  const [currentUserResults, setCurrentUserResults] = useState({});
  const [allPlayers, setAllPlayers] = useState([]);

  getCurrentUserUser();
  getAllUsers();

  function getCurrentUserUser() {
    useEffect(() => {
      fetch(`https://universallychallenged.herokuapp.com/users/admin`) // needs to accommodate for correct current player & quiz subject
        .then((res) => res.json())
        .then((data) => {
          setCurrentUserResults((prev) => {
            return {
              ...prev,
              data: data
            };
          });
        })
        .catch((err) => console.log("Something went wrong: ", err));
    }, []);
  }

  function getAllUsers() {
    useEffect(() => {
      fetch("https://universallychallenged.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => {
          setAllPlayers(data);
        })
        .catch((err) => console.log("Something went wrong: ", err));
    }, []);
  }

  return (
    <>
      <h1>Winner</h1>

      <h3>{currentUserResults.data.user.username}</h3>
      <i className="fa-solid fa-trophy"></i>

      <ul>
        {allPlayers.users.map((singleUserObj) => {
          {
            /* needs to accommodate correct 5 chosen users & quiz subject score */
          }
          return (
            <li>
              {singleUserObj.username}{" "}
              <span>{singleUserObj.scores.animals}/5</span>
            </li>
          );
        })}
      </ul>

      <button>
        <Link to={"/category"}>Play again</Link>
      </button>

      <button>
        <Link to={"/"}>Return home</Link>
      </button>
    </>
  );
};

export default MultiPlayerScores;
