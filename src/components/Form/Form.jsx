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

  console.log(text);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form}
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={handleChange}
      />
      <button className="button">Add</button>
    </form>
  );
};
