import React from "react";
import styles from "./Filter.module.css";
import { FilterButton } from "./FilterButton/FilterButton";

import { changeAllStatuses, deleteAllCompleted } from "../../store/todoSlice";

import { useSelector, useDispatch } from "react-redux";

export const Filter = (props) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const countCompleted = todos.filter((todo) => !todo.completed);

  return (
    <div>
      {!!todos.length && (
        <div className={styles.filter}>
          <p className={styles.filterCounter}>
            {countCompleted.length} items left
          </p>
          {props.filterNames.map((name, index) => (
            <FilterButton
              key={index}
              name={name}
              isPressed={name === props.filter}
              setFilter={props.setFilter}
            />
          ))}
          <button onClick={() => dispatch(changeAllStatuses())}>Check</button>
          <button onClick={() => dispatch(deleteAllCompleted())}>Clear</button>
        </div>
      )}
    </div>
  );
};
