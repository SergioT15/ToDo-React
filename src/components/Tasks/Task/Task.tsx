import React from "react";

import { todoSlice, TTodo } from "../../../store/todoSlice";

import { deleteToDo, updateToDo } from "../../../store/api/api";

import { useState } from "react";

import img from "../../../assets/trash.png";

import { TaskStyled } from "./Task.styled";
import { useAppDispatch } from "../../../store/hooks";

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
      await updateToDo({
        _id: props.todo._id,
        text: newText,
        completed: props.todo.completed,
        __v: 0,
        filter: "",
      });
      dispatch(
        todoSlice.actions.udateTodo({
          _id: props.todo._id,
          text: newText,
          completed: props.todo.completed,
        })
      );
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

  const changeStatuss = async () => {
    await updateToDo({
      _id: props.todo._id,
      text: props.todo.text,
      completed: !props.todo.completed,
      __v: 0,
      filter: "",
    });
    dispatch(
      todoSlice.actions.udateTodo({
        _id: props.todo._id,
        text: props.todo.text,
        completed: !props.todo.completed,
      })
    );
  };

  return (
    <TaskStyled isCompletedTodo={props.todo.completed}>
      <div className="taskCheckboxDiv">
        <input
          className="taskCheckbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={changeStatuss}
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
        >
          {props.todo.text}
        </p>
      )}
      <button className="taskDeleteButton" onClick={delet}>
        <img className="imgTask" src={img} alt="Ypss" />
      </button>{" "}
    </TaskStyled>
  );
};
