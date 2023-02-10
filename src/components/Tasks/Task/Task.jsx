import React from "react";

import { useState } from "react";

import styles from "./Task.module.css";

export const Task = (props) => {
  const [newText, setNewText] = useState(props.todo.text);
  const [isEditing, setEditing] = useState("");

  function handleChange(e) {
    setNewText(e.target.value);
  }

  const notNewText = (e) => {
    setNewText(props.todo.text);
    setEditing("");
  };

  const goOutOnEsc = (e) => {
    if (e.code !== "Escape") {
      return setEditing(props.todo.id);
    } else {
      notNewText();
    }
  };

  // const onBlur = () => {
  //   setNewText("");
  //   setEditing("");
  // };

  const handleChangeOnClick = (e) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      props.editTodo(props.todo.id, newText);
      setNewText(newText);
      setEditing(false);
    }
    setEditing(false);
  };

  return (
    <div className={styles.task}>
      <>
        <div className={styles.taskCheckboxDiv}>
          <input
            className={styles.taskCheckbox}
            checked={props.todo.completed}
            type="checkbox"
            onChange={() => props.changeStatus(props.todo.id)}
          />
        </div>
        {isEditing === props.todo.id ? (
          <form className={styles.taskBlockEdit} onSubmit={handleChangeOnClick}>
            <input
              className={styles.taskInputEdit}
              placeholder="edit todo"
              value={newText}
              onChange={handleChange}
              type="text"
              onKeyUp={goOutOnEsc}
              autoFocus
              // onBlur={onBlur}
            />
          </form>
        ) : (
          <p
            onDoubleClick={() => {
              setEditing(props.todo.id);
            }}
            className={`${
              props.todo.completed ? styles.taskTextCompleted : ""
            }`}
          >
            {props.todo.text}
          </p>
        )}
        <button
          className={styles.taskDeleteButton}
          onClick={() => props.deleteTodo(props.todo.id)}
        ></button>
      </>
    </div>
  );
};
