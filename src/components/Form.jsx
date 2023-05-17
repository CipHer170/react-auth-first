import React, { useState } from "react";

function Form() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleChangeLogin = (e) => {
    setUserLogin(e.target.value);
  };
  const handleChangPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (userPassword.length >= 8 && userLogin.length >= 10) {
      setUserPassword(e.target.value);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  return (
    <form className="onSubmitForm" onSubmit={handleSubmitForm}>
      <label htmlFor="">
        {passwordError ? "Error Enter new one" : "Enter Login"}
      </label>
      <input type="text" value={userLogin} onChange={handleChangeLogin} />
      <label htmlFor="">
        {passwordError ? "Error Enter new one" : "Enter password"}
      </label>
      <input type="text" value={userPassword} onChange={handleChangPassword} />
      <button onSubmit={handleSubmitForm}>Login</button>
    </form>
  );
}

export default Form;
