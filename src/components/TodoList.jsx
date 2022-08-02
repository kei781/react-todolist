import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
