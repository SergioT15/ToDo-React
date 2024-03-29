import React from "react";

import { FilterStyled } from "./Filter.styled";
import { FilterButton } from "./FilterButton/FilterButton";
import { setTodo } from "../../store/todoSlice";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { completedAllToDo, deleteALlToDo } from "../../api/todoApi";

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const countActiveTodo = useAppSelector((state) => state.todos.AciveTodos);

  const filter = useAppSelector((state) => state.todos.filter);

  const filterNames = ["All", "Active", "Completed"];

  const deleteAllComple = async () => {
    try {
      const todos = await deleteALlToDo();
      dispatch(setTodo(todos));
    } catch (err) {
      console.log(`Error! Unable to deleted all completed todo! ${err}`);
    }
  };

  const isFalseTodo = todos.some((item) => !item.completed);
  const completeAllComple = async () => {
    try {
      const todos = await completedAllToDo(isFalseTodo);
      dispatch(setTodo(todos));
    } catch (err) {
      console.log(`Error! Unable to completed all todo! ${err}`);
    }
  };

  return (
    <FilterStyled>
      <div className="filter-container">
        <p className="filter-button">{countActiveTodo} items left</p>
        {filterNames.map((name, index) => (
          <FilterButton key={index} name={name} isPressed={name === filter} />
        ))}
        <button onClick={completeAllComple}>Check</button>
        <button onClick={deleteAllComple}>Clear</button>
      </div>
    </FilterStyled>
  );
};
