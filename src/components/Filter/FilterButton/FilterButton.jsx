import React from "react";

// import styles from "./FilterButton.module.css";
import { FilterButtonStyled } from "./FilterButton.styled";

// import { useAppDispatch } from "../../../store/hooks";

// import { filterTodo } from "../../../store/todoSlice";
import { useFiltereTodoMutation } from "../../../store/services/TodoService";

export const FilterButton = (props) => {
  const [filtereTodo] = useFiltereTodoMutation()
  // const dispatch = useAppDispatch();

  const changeName = () => {
    filtereTodo({filter: props.name});
    console.log(props.name);
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
