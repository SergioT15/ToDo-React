import React from "react";

import styles from "./Task.module.css"

export const Task = (props) => {
  return (
    <div className={styles.task}>
      <input
        checked={props.todo.completed}
        type="checkbox"
        onChange={() => props.changeStatus(props.todo.id)}
      />
      <p>{props.todo.text}</p>
      {/* <p>{props.id}</p> */}
      <button onClick={() => props.deleteTodo(props.todo.id)}>x</button>
    </div>
  );
};
