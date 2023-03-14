import React from "react";

// import styles from "./FilterButton.module.css";
import { FilterButtonStyled } from "./FilterButton.styled";

import { useDispatch } from "react-redux";

import { filterTodo } from "../../../store/todoSlice";

export const FilterButton = (props) => {
  const dispatch = useDispatch();

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
