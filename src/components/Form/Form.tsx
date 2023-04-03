import React , { useState } from "react";
import { useAddTodoMutation } from "../../store/services/TodoService";

// import styles from "./Form.module.css";
import { FormStyled } from "./Form.styled";

export const Form: React.FC = (props) => {
  const [addTodo] = useAddTodoMutation();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   addTodo({text: text});
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