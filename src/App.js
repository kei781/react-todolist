import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TodoEdit from "./components/TodoEdit";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const nextId = useRef(4);

  const handleDragStart = (e, todo) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("tmp", JSON.stringify(todo));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, targetItem) => {
    e.preventDefault();
    try {
      const originalItem = await JSON.parse(e.dataTransfer.getData("tmp")); // 1
      // setTodos((todos) =>
      //   todos.map((todo) => {
      //     return todo.id === targetItem.id
      //       ? { ...originalItem, id: targetItem.id }
      //       : todo.id === originalItem.id
      //       ? { ...targetItem, id: originalItem.id }
      //       : todo;
      //   })
      // );
      const data = await axios({
        url: `http://localhost:4000/todos/swap/${originalItem.id}`,
        method: "PATCH",
        data: { targetId: targetItem.id },
      });

      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };

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

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/todos/check/${id}`,
        method: "PATCH",
      });
      setTodos(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onUpdate = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    onInsertToggle();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/todos",
          method: "GET",
        });

        setTodos(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
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
