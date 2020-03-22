import React from "react";
import Todo from "./Todo";
import "../styles/Todolist.css";
import "../styles/Todo.css";

export default function TodoList() {
  const arrayOfData = [
    {
      value: "Finish group work assignment",
      date: new Date().toLocaleDateString(),
      description: "Work on UI and do data manipulation"
    },
    {
      value: "Buy toilet paper",
      date: new Date().toLocaleDateString(),
      description: "Try at least 3 stores...Germans love to eat toilet paper!"
    },
    {
      value: "Take the dog to the vet",
      date: new Date().toLocaleDateString(),
      description: ""
    },
    {
      value: "Finish group work assignment",
      date: new Date().toLocaleDateString(),
      description: "Work on UI and do data manipulation"
    },
    {
      value: "Buy toilet paper",
      date: new Date().toLocaleDateString(),
      description: "Try at least 3 stores...Germans love to eat toilet paper!"
    },
    {
      value: "Take the dog to the vet",
      date: new Date().toLocaleDateString(),
      description: ""
    }
  ];
  function addTodo() {
    alert("Clicked on Add new To Do");
  }

  const getToDoList = arrayOfData.map((element, index) => {
    // Map returns an array at then
    return (
      <Todo
        key={index}
        value={element.value}
        dateProperty={element.date}
        descriptionProperty={element.description}
      />
    );
  });

  return (
    <div>
      <div className="header-menu-wrapper">
        <div className="header-menu">
          <h1>To Do List</h1>
          <button
            onClick={addTodo}
            type="button"
            className="btn btn-secondary button-todo"
          >
            Add new To Do
          </button>
        </div>
      </div>
      <div>{getToDoList}</div>
    </div>
  );
}
