import React from "react";
import Todo from "./Todo";

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
    }
  ];

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

  return <div>{getToDoList}</div>;
}
