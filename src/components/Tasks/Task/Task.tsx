import React from "react";

import { useAppDispatch } from "../../../store/hooks";

import { TTodo } from "../../../store/todoSlice";

import { useState } from "react";

import img from "../../../assets/trash.png";
// import styles from "./Task.module.css";
import { TaskStyled } from "./Task.styled";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useChangeStatusMutation,
} from "../../../store/services/TodoService";

interface ITodoState {
  todo: TTodo;
}

export const Task: React.FC<ITodoState> = (props) => {
  const [editTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [changeStatus] = useChangeStatusMutation();

  const [newText, setNewText] = useState<string>(props.todo.text);
  const [isEditing, setEditing] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewText(e.target.value);
  }

  const notNewText = () => {
    setNewText(props.todo.text);
    setEditing("");
  };

  const goOutOnEsc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Escape") {
      return setEditing(props.todo._id);
    } else {
      notNewText();
    }
  };

  // const onBlur = () => {
  //   setNewText("");
  //   setEditing("");
  // };

  const handleChangeOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      editTodo({ _id: props.todo._id, text: newText });
      setNewText(newText);
      setEditing("");
    } else {
      setNewText(props.todo.text);
    }
    setEditing("");
  };

  return (
    <TaskStyled isCompletedTodo={props.todo.completed}>
      <div className="taskCheckboxDiv">
        <input
          className="taskCheckbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => changeStatus( {_id: props.todo._id, completed: !props.todo.completed})}
        />
      </div>
      {isEditing === props.todo._id ? (
        <form className="taskBlockEdit" onSubmit={handleChangeOnClick}>
          <input
            className="taskInputEdit"
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
          className="taskP"
          onDoubleClick={() => {
            setEditing(props.todo._id);
          }}

          // className={`${
          //   props.todo.completed ? styles.taskTextCompleted : ""
          // }`}
        >
          {props.todo.text}
        </p>
      )}
      <button
        className="taskDeleteButton"
        onClick={() => deleteTodo({ _id: props.todo._id })}
      >
        <img className="imgTask" src={img} alt="Ypss" />
      </button>{" "}
    </TaskStyled>
  );
};
