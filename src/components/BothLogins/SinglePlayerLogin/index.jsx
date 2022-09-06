import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SinglePlayerLogin.css";

const SinglePlayerLogin = () => {
  /* state variables for: username input, form submitting, form validation */
  const [inputValue, setInputValue] = useState({ username: "" });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleUsernameInput = (e) => {
    // updates user input
    setInputValue({ ...inputValue, username: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // the following below helps validate form before submission
    setSubmitForm((prev) => {
      prev = true;
      return prev;
    });

    if (inputValue.username) {
      setIsValid((prev) => {
        prev = true;
        return prev;
      });
    }

    getAllUsers();
    getOneUser();
  };

  function getAllUsers() {
    fetch("https://universallychallenged.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("All Users: ", data);
      })
      .catch((err) => console.log("Something went wrong: ", err));
  }

  function getOneUser() {
    fetch(
      `https://universallychallenged.herokuapp.com/users/${inputValue.username}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("admin's full data: ", data);
        console.log("admin's name: ", data.user.username);
      })
      .catch((err) => console.log("Something went wrong: ", err));
  }

  function createNewUser() {
    axios
      .post("https://universallychallenged.herokuapp.com/users", { username })
      .then((response) => {
        if (response.data.success) {
          console.log("username created");
        }
      })
      .catch((err) => {
        console.log("An error occurred: ", err);
      });
  }

  return (
    <>
      {submitForm && isValid ? null : (
        <h1 id="singlePlayerTitle">Choose your username</h1>
      )}

      {submitForm && isValid ? null : (
        <form onSubmit={handleSubmitForm} id="singlePlayerFormContainer">
          <input
            name="username"
            id="username"
            autoComplete="off"
            type="text"
            placeholder="Enter username"
            value={inputValue.username}
            onChange={handleUsernameInput}
          />
          {submitForm && !inputValue.username ? (
            <p>Please enter a username</p>
          ) : null}
          <br />

          {submitForm && isValid ? null : (
            <button>
              Submit<i className="fa-solid fa-paper-plane"></i>
            </button>
          )}
        </form>
      )}

      {submitForm && isValid ? (
        <p id="thankYouMessage">Hello {inputValue.username}</p> // get name from backend
      ) : null}

      {submitForm && isValid ? (
        <button id="nextBtn">
          <Link to={"/category"}>Next</Link>
        </button>
      ) : null}
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
