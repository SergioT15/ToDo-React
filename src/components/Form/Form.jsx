import { useState } from "react";
import React from "react";
import styles from "./Form.module.css";

export const Form = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(text);
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
