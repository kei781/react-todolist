import React, { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
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
      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        show todos
      </button>
    </TodoTemplate>
  );
}

export default App;
