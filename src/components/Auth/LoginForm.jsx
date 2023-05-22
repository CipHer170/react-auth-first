import axios from "axios";
import "./Forms.scss";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Form() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChangeLogin = (e) => {
    setUserLogin(e.target.value);
  };
  const handleChangPassword = (e) => {
    setUserPassword(e.target.value);
  };

  // const URL = "https://todoapidrf.pythonanywhere.com/api/auth/login/";
  const data = {
    email: userLogin,
    password: userPassword,
  };
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    (async () => {
      try {
        await axios
          .post("https://todoapidrf.pythonanywhere.com/api/auth/login/", {
            username: data.email,
            password: data.password,
          })
          .then((res) => {
            if (res.status === 200) {
              navigate("/todo");
            } else {
              alert("Wrong credentials");
            }
            return res.data.result;
          });
      } catch (error) {}
    })();
  };

  return (
    <div className="login-form">
      <form className="onSubmitForm" onSubmit={handleSubmitForm}>
        <label htmlFor="">Enter Login </label>
        <input type="text" value={userLogin} onChange={handleChangeLogin} />
        <label htmlFor="">Enter password</label>
        <input
          type="text"
          value={userPassword}
          onChange={handleChangPassword}
        />
        <button type="submit">Login</button>
        <NavLink to="/signup">Sign up</NavLink>
      </form>
    </div>
  );
}

export default Form;

// if (userPassword.length >= 8 && userLogin.length >= 10) {
//   setUserPassword(e.target.value);
//   setPasswordError(false);
// } else {
//   setPasswordError(true);
// }

// const strongRegex = new RegExp(
//   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// );
