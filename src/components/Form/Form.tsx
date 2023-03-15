import { useState } from "react";

import React from "react";

import { useAppDispatch } from "../../store/hooks";

import { addTodo } from "../../store/todoSlice";

// import styles from "./Form.module.css";
import { FormStyled } from "./Form.styled";

export const Form: React.FC = (props) => {
  const [text, setText] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo(text));
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
