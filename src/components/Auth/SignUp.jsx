import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Forms.scss";
import axios from "axios";
function SignUp() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // const URL = "https://todoapidrf.pythonanywhere.com/api/auth/register/";
  const handleSubmitForm = (event) => {
    event.preventDefault();
    (async () => {
      try {
        // if (password === rePassword) {
        //   setUserPassword(password);
        await axios.post(
          "https://todoapidrf.pythonanywhere.com/api/auth/register/",
          {
            first_name: firstName,
            last_name: lastName,
            username: userLogin,
            password: userPassword,
          }
        );
      } catch (error) {
        // else {
        //   setPasswordError(true);
        // }
        // }
      }
    })();
  };

  const handleChangeusername = (e) => {
    setUserLogin(e.target.value);
  };

  const handleChangefirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  return (
    <div className="signup-fotm">
      <form className="onSubmitForm" onSubmit={handleSubmitForm}>
        <label htmlFor="">Enter username</label>
        <input type="text" value={userLogin} onChange={handleChangeusername} />
        <label htmlFor="">Enter first_name</label>
        <input type="text" value={firstName} onChange={handleChangefirstname} />
        <label htmlFor="">Enter last_name</label>
        <input type="text" value={lastName} onChange={handleChangeLastName} />
        <label htmlFor="">{passwordError ? "xato" : "Enter password"}</label>
        <input
          type="text"
          value={password}
          onChange={handleChangeNewPassword}
        />
        <label htmlFor="">{passwordError ? "xato" : "Re-enter password"}</label>
        <input
          type="text"
          value={rePassword}
          onChange={handleChangeRePassword}
        />
        <button type="submit">Sign Up</button>
      </form>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}

export default SignUp;
