import React, { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("1글자 이상 입력해주세요");
      return;
    }

    // 새로운 배열을 만드는 방법
    {
      /*const newArr = [];
    for (let i = 0; i < todos.length; i++) {
      newArr[i] = todos[i];
    }
    newArr.push(todo);
    setTodos(newArr);*/
    }

    // concat을 이용하는 방법
    // setTodos((currentArray) => currentArray.concat(todo));
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="할 일을 적어주세요."
        />
        <button>등록</button>
      </form>

      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        check
      </button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
