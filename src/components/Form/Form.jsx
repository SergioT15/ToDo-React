import { useState } from "react";

import React from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../../store/todoSlice";

// import styles from "./Form.module.css";
import { FormStyled } from "./Form.styled";

export const Form = (props) => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={handleChange}
      />
      <button className="buttonForm">Add</button>
    </FormStyled>
  );
};
