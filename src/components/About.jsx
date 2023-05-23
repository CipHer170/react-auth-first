import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useContex";

function About() {
  const { logIn } = useAuth();

  return (
    <div>
      About us
      <h1>
        <NavLink to="/login" onClick={logIn}>
          Log In
        </NavLink>
      </h1>
    </div>
  );
}

export default About;
