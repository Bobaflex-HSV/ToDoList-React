import React from "react";
import "./styles/styles.css";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList />
    </div>
  );
}
