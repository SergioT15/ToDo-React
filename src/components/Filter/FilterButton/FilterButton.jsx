import React from "react";

import styles from "./FilterButton.module.css";

import { useDispatch } from "react-redux";

import { filterTodo } from "../../../store/todoSlice";

export const FilterButton = (props) => {
  const dispatch = useDispatch();

  const changeName = () => {
    dispatch(filterTodo(props.name));
  };

  return (
    <div>
      <button
        type="button"
        onClick={changeName}
        className={`${props.isPressed ? styles.filterButtonGreen : ""}`}
      >
        {props.name}
      </button>
    </div>
  );
};
