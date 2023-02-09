import React from "react";

import styles from "./Task.module.css";

export const Task = (props) => {
  return (
    <div className={styles.task}>
      <div>
        <input
          className={styles.taskCheckbox}
          checked={props.completed}
          type="checkbox"
          onChange={() => props.changeStatus(props.todo.id)}
        />
      </div>

      <p
        style={{
          textDecoration: props.todo.completed && "line-through",
          color: props.todo.completed && "rgb(235, 130, 148)",
        }}
      >
        {props.todo.text}
      </p>
      <button
        className={styles.taskDeleteButton}
        onClick={() => props.deleteTodo(props.todo.id)}
      ></button>
    </div>
  );
};
