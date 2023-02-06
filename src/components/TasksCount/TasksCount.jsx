import React from "react";
import "./TasksCount";

export const TasksCount = (props) => {
  return (
    <div>
      {props.todos.length !== 0 && <p>{props.todos.length} items left</p>}
    </div>
  );
};
