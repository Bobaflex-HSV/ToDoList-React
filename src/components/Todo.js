import React from "react";
import "../styles/Todo.css";

export default function Todo({ value, dateProperty, descriptionProperty }) {
  function markAsDone() {
    console.log("Clicked on " + value);
  }

  return (
    <div onClick={markAsDone} className="todo-wrapper">
      <div className="todo-title-date">
        <h5>{value}</h5>
        <span>Created on: {dateProperty}</span>
      </div>
      <div className="description-wrapper">
        <div className="todo-description">
          <span>{descriptionProperty}</span>
        </div>
        <div className="function-buttons">
          <button type="button" className="btn btn-secondary button-todo">
            Edit
          </button>
          <button type="button" className="btn btn-secondary button-todo">
            Mark Done
          </button>
          <button type="button" className="btn btn-secondary button-todo">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
