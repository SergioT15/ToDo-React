import React from "react";
import "./Task.css";

export const Task = (props) => {
  return (
    <div className="task">
      <input
        checked={props.todo.completed}
        type="checkbox"
      />
      <p>{props.todo.text}</p>
      {/* <p>{props.id}</p> */}
      <button>x</button>
    </div>
  );
};
