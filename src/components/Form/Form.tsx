import { useState } from "react";

import React from "react";

// import { useAppDispatch } from "../../store/hooks";

// import { addTodo } from "../../store/todoSlice";
import { addToDo } from "../../store/api/api";

// import styles from "./Form.module.css";
import { FormStyled } from "./Form.styled";
import { useAppDispatch } from "../../store/hooks";
import { todoSlice } from "../../store/todoSlice";

export const Form: React.FC = (props) => {
  const [text, setText] = useState("");
  
 const dispatch = useAppDispatch()
  // const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch(addTodo(text));

    const newTodo = await addToDo(text);
    dispatch(todoSlice.actions.addTodo(newTodo))
    // const value = await addToDo(text);
    // console.log(value);
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
