import React, { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const onInsert = (text) => {
    const todo = {
      id: nextId,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
