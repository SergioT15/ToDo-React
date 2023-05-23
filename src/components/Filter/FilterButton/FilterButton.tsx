import React from "react";

import { FilterButtonStyled } from "./FilterButton.styled";

import { useAppDispatch } from "../../../store/hooks";

import { filterTodo } from "../../../store/todoSlice";

interface IProps {
  name: string;
  isPressed: boolean;
}

export const FilterButton: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  const changeName = () => {
    dispatch(filterTodo(props.name));
  };

  return (
    <FilterButtonStyled isPressedTodo={props.isPressed}>
      <button
        type="button"
        onClick={changeName}
        className="filter-button--green"
      >
        {props.name}
      </button>
    </FilterButtonStyled>
  );
};

