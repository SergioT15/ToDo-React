import { useState } from "react";
import React from "react";
import "./Form.css";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={text}
        onChange={handleChange}
      />
      <button className="button">Add</button>
    </form>
  );
};
