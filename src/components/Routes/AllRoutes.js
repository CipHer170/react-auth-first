import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import LoginForm from "./components/Auth/LoginForm";
import About from "./components/About";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import Layout, { Private1, Private2, Private3 } from "./components/Layout";
import Table from "./components/table.jsx/Table";
import { useAuth } from "../../hooks/useContex";

function AllRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/todo" element={<Todo />} />
          <Route path="/private1" element={<Private1 />} />
          <Route path="/private2" element={<Private2 />} />
          <Route path="/private3" element={<Private3 />} />
          <Route path="/table" element={<Table />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
