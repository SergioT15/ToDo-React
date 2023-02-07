import React from "react";
import Active from "./Active";
import { All } from "./All";
import { Completed } from "./Completed";
import styles from "./Filter.module.css";

export const Filter = (props) => {
  return (
    <div className={styles.filter}>
      {props.todos.length !== 0 && <p>{props.todos.length} items left</p>}
      <All />
      <Active />
      <Completed />
      {props.todos.length !== 0 && (
        <button onClick={() => props.changeAllStatuses()}>Check All</button>
      )}
      {props.todos.length !== 0 && (
        <button onClick={props.deleteAllCompleted}>Clear completed</button>
      )}
    </div>
  );
};
