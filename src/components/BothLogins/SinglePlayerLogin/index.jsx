import React, { useState, useContext } from "react";
import DataContext from "../../../context/dataContext";
import { NavLink, useNavigate } from "react-router-dom";

import "./SinglePlayerLogin.css";

const SinglePlayerLogin = () => {
  const { handleUsernameInput, inputValue } = useContext(DataContext);
  const navigate = useNavigate();

  /* state variables for: username input, form submitting, form validation */
  // const [inputValue, setInputValue] = useState({ username: "" });
  const [submitForm, setSubmitForm] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // const handleUsernameInput = (e) => {
  // // updates user input
  //   setInputValue({ ...inputValue, username: e.target.value });
  // };

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

      // slows move to next page to show username & spinner
      setTimeout(moveToNextPage, 800);

      // creates new user in mongodb
      createNewUser();
    }
  };

  function createNewUser() {
    const options = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: inputValue.username
      })
    };

    fetch(`https://universallychallenged.herokuapp.com/users`, options)
      .then((res) => res.json())
      .then((data) => console.log("data==> ", data))
      .then((data) => {
        handleUsernameInput(data);
      })
      .catch((err) => console.log("Something went wrong: ", err));
  }

  // move to next page
  function moveToNextPage() {
    navigate("/category");
  }
  // console.log("inputValue==> ", inputValue)
  // console.log("handleUsernameInput==> ", handleUsernameInput)

  return (
    <>
      {submitForm && isValid ? null : (
        <h1 id="singlePlayerTitle">Choose your username</h1>
      )}

      {submitForm && isValid ? null : (
        <>
          {/* <NavLink to="/score-single">Score</NavLink> */}
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
        </>
      )}

      {submitForm && isValid ? (
        <>
          <p id="welcomeMessage">Welcome {inputValue.username}</p>
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
        </>
      ) : null}
    </>
  );
};

export default SinglePlayerLogin;

// for both multiplayer and single: render components based on previous choice
