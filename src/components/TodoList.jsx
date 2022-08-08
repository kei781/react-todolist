import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({
  todos,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => {
        //console.log(`${index}번 todo `, todo);
        return (
          <TodoListItem
            todo={todo}
            key={index}
            onRemove={onRemove}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            setSelectedTodo={setSelectedTodo}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
