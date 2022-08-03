import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle, onInsertToggle }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
