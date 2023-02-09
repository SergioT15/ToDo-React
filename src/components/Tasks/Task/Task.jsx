import React from "react";

import { useState } from "react";

import styles from "./Task.module.css";

export const Task = (props) => {
  const [newText, setNewText] = useState(props.todo.text);

  function handleChange(e) {
    setNewText(e.target.value);
  }

  const notNewText = () => {
    setNewText("");
    props.setEditing("");
  };

  return (
    <div className={styles.task}>
      <>
        <div>
          <input
            className={styles.taskCheckbox}
            checked={props.todo.completed}
            type="checkbox"
            onChange={() => props.changeStatus(props.todo.id)}
          />
        </div>
        {props.isEditing === props.todo.id ? (
          <form
            className={styles.taskBlockEdit}
            onSubmit={(e) => {
              e.preventDefault();
              props.editTodo(props.todo.id, newText);
              setNewText("");
              props.setEditing(false);
            }}
          >
            <input
              className={styles.taskInputEdit}
              key={props.id}
              placeholder="edit todo"
              value={newText}
              onChange={handleChange}
              type="text"
            />

            <button
              className={styles.taskButtonEscEdit}
              type="button"
              onClick={notNewText}
            >
              Cancel
            </button>
          </form>
        ) : (
          <p
            onDoubleClick={() => {
              props.setEditing(props.todo.id);
            }}
            style={{
              textDecoration: props.todo.completed && "line-through",
              color: props.todo.completed && "rgb(235, 130, 148)",
            }}
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
