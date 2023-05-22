import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useContex";

function Todo() {
  const { fetchTodos } = useContext(TodoContext);
  const { user } = useAuth();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // base jsx

  return <div className="todo">Ptofile user</div>;
}

export default Todo;
