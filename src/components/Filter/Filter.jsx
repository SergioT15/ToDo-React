import React from "react";
// import styles from "./Filter.module.css";
import { FilterStyled } from "./Filter.styled";

import { FilterButton } from "./FilterButton/FilterButton";

import { changeAllStatuses, deleteAllCompleted } from "../../store/todoSlice";

import { useSelector, useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const countCompleted = todos.filter((todo) => !todo.completed);

  const filterNames = ["All", "Active", "Completed"];

  const filter = useSelector((state) => state.todos.filter);

  return (
    <FilterStyled>
      {!!todos.length && (
        <div className="filter">
          <p className="filterCounter">{countCompleted.length} items left</p>
          {filterNames.map((name, index) => (
            <FilterButton key={index} name={name} isPressed={name === filter} />
          ))}
          <button onClick={() => dispatch(changeAllStatuses())}>Check</button>
          <button onClick={() => dispatch(deleteAllCompleted())}>Clear</button>
        </div>
      )}
    </FilterStyled>
  );
};
