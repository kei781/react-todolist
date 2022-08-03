import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({
  todos,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
}) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
          setSelectedTodo={setSelectedTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
