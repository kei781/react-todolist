import React, { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <h1>할 일</h1>
      <form action="">
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="할 일을 적어주세요."
        />
      </form>
    </div>
  );
}

export default App;
