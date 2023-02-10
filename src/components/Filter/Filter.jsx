import React from "react";
import styles from "./Filter.module.css";
import { FilterButton } from "./FilterButton/FilterButton";

export const Filter = (props) => {
  const countCompleted = props.todos.filter((todo) => !todo.completed);

  return (
    <div>
      {props.todos.length !== 0 && (
        <div className={styles.filter}>
          <p className={styles.filterCounter}>
            {countCompleted.length} items left
          </p>
          {props.filterNames.map((name, index) => {
            return (
              <FilterButton
                key={index}
                name={name}
                isPressed={name === props.filter}
                setFilter={props.setFilter}
              />
            );
          })}
          <button onClick={() => props.changeAllStatuses()}>Check</button>
          <button onClick={props.deleteAllCompleted}>Clear</button>{" "}
        </div>
      )}
    </div>
  );
};
