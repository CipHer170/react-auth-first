import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="list-menu">
      <header>
        <NavLink to="/">About us</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/todo">My Todos</NavLink>
      </header>
      <Outlet />
      <footer>2023</footer>
    </div>
  );
}

export default Layout;
