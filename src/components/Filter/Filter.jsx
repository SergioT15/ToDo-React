import React from "react";
import styles from "./Filter.module.css";
import { FilterButton } from "./FilterButton/FilterButton";

export const Filter = (props) => {

  return (
    <div className={styles.filter}>
      {props.todos.length !== 0 && <p>{props.todos.length} items left</p>}
      
      {props.todos.length !== 0 &&
        props.filterNames.map((name, index) => {
          return (
            <FilterButton
              key={index}
              name={name}
              isPressed={name === props.filter}
              setFilter={props.setFilter}
              todos={props.todos}
              changeAllStatuses={props.changeAllStatuses}
              deleteAllCompleted={props.deleteAllCompleted}
            />
          );
        })}

      {props.todos.length !== 0 && (
        <button onClick={() => props.changeAllStatuses()}>Check</button>
      )}
      {props.todos.length !== 0 && (
        <button onClick={props.deleteAllCompleted}>Clear</button>
      )}
    </div>
  );
};
