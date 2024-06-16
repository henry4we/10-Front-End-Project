import React, { useState } from "react";
import "../App.css"

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return window.alert("Please enter a task");
    if (todos.some((todo) => todo.text.toLowerCase() === input.toLowerCase()))
      return window.alert("Task already exists");
    setTodos((todos) => [
      ...todos,
      {
        text: input,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInput("");
    console.log(input);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (

  
    <div className="container">
    <h3 className="task">Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Todo;
