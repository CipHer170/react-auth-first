import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";
import { useAuth } from "../hooks/useContex";

function Layout() {
  const { user, logIn, logOut } = useAuth();
  return (
    <div className="list">
      <header className="list__menu">
        <NavLink to="/">About us</NavLink>
        <NavLink to="/todo">My Todos</NavLink>
        <NavLink to="/private1">Private 1</NavLink>
        <NavLink to="/private2">Private 2</NavLink>
        <NavLink to="/private3">Private 3</NavLink>
        {user ? (
          // <button onClick={logOut}>Sign out</button>
          <NavLink to="/" onClick={logOut}>
            Log Out
          </NavLink>
        ) : (
          // <button onClick={logIn}>Sign In</button>
          <NavLink to="/login" onClick={logIn}>
            Log In
          </NavLink>
        )}
      </header>
      <div className="list__outlet">
        <Outlet />
      </div>
      <footer className="list__footer">2023</footer>
    </div>
  );
}

export default Layout;

export const Private1 = () => {
  return <h1>Private 1</h1>;
};
export const Private2 = () => {
  return <h1>Private 2</h1>;
};
export const Private3 = () => {
  return <h1>Private 3</h1>;
};
