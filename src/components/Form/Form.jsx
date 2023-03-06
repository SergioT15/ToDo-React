import { useState } from "react";

import React from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../../store/todoSlice";

import styles from "./Form.module.css";

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
    <form className={`${styles.form} ${text ? styles.blabla : ''}`} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.buttonForm}>Add</button>
    </form>
  );
};
