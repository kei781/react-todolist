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
    //////////

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
    </div>
  );
}

export default App;
