import { useDispatch } from "react-redux";

import { changeStatus, editTodo, deleteTodo } from "../../../store/todoSlice";

import { useState } from "react";

// import styles from "./Task.module.css";
import { TaskStyled } from "./Task.styled";

export const Task = (props) => {
  const [newText, setNewText] = useState(props.todo.text);
  const [isEditing, setEditing] = useState("");

  const dispatch = useDispatch();

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
      dispatch(editTodo({ id: props.todo.id, text: newText }));
      setNewText(newText);
      setEditing(false);
    } else {
      setNewText(props.todo.text);
    }
    setEditing(false);
  };

  return (
    <TaskStyled isCompletedTodo={props.todo.completed}>
      <>
        <div className="taskCheckboxDiv">
          <input
            className="taskCheckbox"
            checked={props.todo.completed}
            type="checkbox"
            onChange={() => dispatch(changeStatus(props.todo.id))}
          />
        </div>
        {isEditing === props.todo.id ? (
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
              setEditing(props.todo.id);
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
          onClick={() => dispatch(deleteTodo(props.todo.id))}
        ></button>
      </>
    </TaskStyled>
  );
};
