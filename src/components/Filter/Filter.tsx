import React from "react";
// import styles from "./Filter.module.css";
import { FilterStyled } from "./Filter.styled";

import { FilterButton } from "./FilterButton/FilterButton";

import {
  deleteAllCompleted,
  changeAllCompleted,
} from "../../store/todoSlice";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { completedAllToDo, deleteALlToDo } from "../../store/api/api";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);

  const countCompleted = todos.filter((todo) => !todo.completed);

  const filterNames = ["All", "Active", "Completed"];

  const filter = useAppSelector((state) => state.todos.filter);

  const deleteAllComple = async () => {
    const todos = await deleteALlToDo();
    dispatch(deleteAllCompleted(todos));
  };

  const completeAllComple = async () => {
    const todos = await completedAllToDo();
    dispatch(changeAllCompleted(todos));
  };

  return (
    <FilterStyled>
      {!!todos.length && (
        <div className="filter">
          <p className="filterCounter">{countCompleted.length} items left</p>
          {filterNames.map((name, index) => (
            <FilterButton key={index} name={name} isPressed={name === filter} />
          ))}
          <button onClick={completeAllComple}>Check</button>
          <button onClick={deleteAllComple}>Clear</button>
        </div>
      )}
    </FilterStyled>
  );
};
