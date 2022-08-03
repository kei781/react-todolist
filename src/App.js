import React, { useRef, useState } from "react";
import TodoEdit from "./components/TodoEdit";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const nextId = useRef(1);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onUpdate = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    onInsertToggle();
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
      />
      {insertToggle && (
        <TodoEdit
          onInsertToggle={onInsertToggle}
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
        />
      )}
    </TodoTemplate>
  );
}

export default App;
