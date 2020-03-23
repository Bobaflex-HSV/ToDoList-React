import React, { useState } from "react";
import "../styles/Todo.css";
import TodoList from "./TodoList";

export default function Todo({ value, dateProperty, descriptionProperty }) {
  function editTodo() {
    alert("Clicked on edit");
  }
  function markDone() {
    alert("Clicked on Mark Done: " + value);
  }

  function deleteTodo() {
    alert("Clicked on Delete");
  }
  return (
    <div className="todo-wrapper">
      <div className="todo-title-date">
        <h5>{value}</h5>
        <span>Created on: {dateProperty}</span>
      </div>
      <div className="description-wrapper">
        <div className="todo-description">
          <span>{descriptionProperty}</span>
        </div>
        <div className="function-buttons">
          <button
            onClick={editTodo}
            type="button"
            className="btn btn-secondary button-todo"
          >
            Edit
          </button>
          <button
            onClick={markDone}
            type="button"
            className="btn btn-secondary button-todo"
          >
            Mark Done
          </button>
          <button
            onClick={deleteTodo}
            type="button"
            className="btn btn-secondary button-todo"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
