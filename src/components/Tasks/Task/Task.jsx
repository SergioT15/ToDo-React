import React from "react";

import styles from "./Task.module.css";

export const Task = (props) => {
  return (
    <div className={styles.task}>
      <div>
        <input
          className={styles.taskCheckbox}
          checked={props.todo.completed}
          type="checkbox"
          onChange={() => props.changeStatus(props.todo.id)}
        />
      </div>

      <p>{props.todo.text}</p>
      <button
        className={styles.taskDeleteButton}
        onClick={() => props.deleteTodo(props.todo.id)}
      ></button>
    </div>
  );
};
