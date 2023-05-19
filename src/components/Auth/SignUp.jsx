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

  const URL = "https://todoapidrf.pythonanywhere.com/api/auth/register/";
  const navigate = useNavigate();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    (async () => {
      try {
        await axios.post(URL, {
          first_name: firstName,
          last_name: lastName,
          password: userPassword,
          username: userLogin,
        });
      } catch (error) {}
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

  const handleChangeNewRePassword = (e) => {
    setRePassword(e.target.value);
    if (password === rePassword) {
      setUserPassword(password);
    } else {
      setPasswordError(true);
    }
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
          onChange={handleChangeNewRePassword}
        />
        <button type="submit">Sign Up</button>
      </form>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}

export default SignUp;
