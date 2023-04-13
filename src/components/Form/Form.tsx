import { useState } from "react";

import React from "react";

import { addToDo } from "../../api/todoApi";

import { FormStyled } from "./Form.styled";
import { useAppDispatch } from "../../store/hooks";
import { todoSlice } from "../../store/todoSlice";

export const Form: React.FC = (props) => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newTodo = await addToDo(text);
      dispatch(todoSlice.actions.addTodo(newTodo));
    } catch (err) {
      console.log(`Error! Unable to added todo! ${err}`);
    }
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={handleChange}
      />
      <button className="form-button_add">Add</button>
    </FormStyled>
  );
};
