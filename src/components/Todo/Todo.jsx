import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";

function Todo() {
  const { fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
  }, []);
  // base jsx

  return <div className="todo"></div>;
}

export default Todo;
