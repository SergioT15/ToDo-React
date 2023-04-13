import React from "react";

import { todoSlice, TTodo } from "../../../store/todoSlice";
import { deleteToDo, updateToDo } from "../../../api/todoApi";
import { useState } from "react";
import { TaskStyled } from "./Task.styled";
import { useAppDispatch } from "../../../store/hooks";
import img from "../../../assets/trash.png";

interface ITodoState {
  todo: TTodo;
}

export const Task: React.FC<ITodoState> = (props) => {
  const [newText, setNewText] = useState<string>(props.todo.text);
  const [isEditing, setEditing] = useState<string>("");

  const dispatch = useAppDispatch();

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

  const handleChangeOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      try {
        await updateToDo({
          _id: props.todo._id,
          text: newText,
          completed: props.todo.completed,
        });
        dispatch(
          todoSlice.actions.udateTodo({
            _id: props.todo._id,
            text: newText,
            completed: props.todo.completed,
          })
        );
      } catch (err) {
        console.log(`Error! Unable to update todo! ${err}`);
      }

      setNewText(newText);
      setEditing("");
    } else {
      setNewText(props.todo.text);
    }
    setEditing("");
  };

  const delet = async () => {
    await deleteToDo(props.todo._id);
    dispatch(todoSlice.actions.deleteTodo(props.todo._id));
  };

  const changeStatus = async () => {
    try {
      await updateToDo({
        _id: props.todo._id,
        text: props.todo.text,
        completed: !props.todo.completed,
      });
      dispatch(
        todoSlice.actions.udateTodo({
          _id: props.todo._id,
          text: props.todo.text,
          completed: !props.todo.completed,
        })
      );
    } catch (err) {
      return console.log(`Error! Unable to completed todo! ${err}`);
    }
  };

  return (
    <TaskStyled isCompletedTodo={props.todo.completed}>
      <div className="task-checkbox">
        <input
          className="task-input__checkbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={changeStatus}
        />
      </div>
      {isEditing === props.todo._id ? (
        <form onSubmit={handleChangeOnClick}>
          <input
            className="task-input--edit"
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
          className="task-text--checked"
          onDoubleClick={() => {
            setEditing(props.todo._id);
          }}
        >
          {props.todo.text}
        </p>
      )}
      <button className="task-button__delete" onClick={delet}>
        <img className="tast-img--trash" src={img} alt="Ypss" />
      </button>{" "}
    </TaskStyled>
  );
};
