import React from "react";

// import styles from "./FilterButton.module.css";
import { FilterButtonStyled } from "./FilterButton.styled";

import { useAppDispatch } from "../../../store/hooks";

import { filterTodo } from "../../../store/todoSlice";

export const FilterButton = (props) => {
  const dispatch = useAppDispatch();

  const changeName = () => {
    dispatch(filterTodo(props.name));
  };

  return (
    <FilterButtonStyled   isPressedTodo={props.isPressed} >
      <button
        type="button"
        onClick={changeName}
        className="filterButtonGreen"
      >
        {props.name}
      </button>
    </FilterButtonStyled>
  );
};
