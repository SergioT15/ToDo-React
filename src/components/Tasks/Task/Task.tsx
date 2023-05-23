import React from "react";

import { todoSlice, TTodo, setAciveTodos } from "../../../store/todoSlice";
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
  const [isEditing, setEditing] = useState<number>(NaN);

  const dispatch = useAppDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewText(e.target.value);
  }

  const notNewText = () => {
    setNewText(props.todo.text);
    setEditing(NaN);
  };

  const goOutOnEsc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Escape") {
      return setEditing(props.todo.id);
    } else {
      notNewText();
    }
  };

  const onBlur = () => {
    setNewText(props.todo.text);
    setEditing(NaN);
  };

  const handleChangeOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      try {
        const updateText = await updateToDo({
          id: props.todo.id,
          text: newText,
          completed: props.todo.completed,
        });
        dispatch(todoSlice.actions.udateTodo(updateText.new_todo));
        dispatch(setAciveTodos(updateText.count_active_todos));
      } catch (err) {
        console.log(`Error! Unable to update todo! ${err}`);
      }
      setNewText(newText);
      setEditing(NaN);
    } else {
      setNewText(props.todo.text);
    }
    setEditing(NaN);
  };

  const delet = async () => {
    await deleteToDo(props.todo.id);
    dispatch(todoSlice.actions.deleteTodo(props.todo.id));
  };

  const changeStatus = async () => {
    try {
      const status = await updateToDo({
        id: props.todo.id,
        text: props.todo.text,
        completed: !props.todo.completed,
      });
      dispatch(todoSlice.actions.udateTodo(status.new_todo));
      dispatch(setAciveTodos(status.count_active_todos));
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
      {isEditing === props.todo.id ? (
        <form onSubmit={handleChangeOnClick}>
          <input
            className="task-input--edit"
            placeholder="edit todo"
            value={newText}
            onChange={handleChange}
            type="text"
            onKeyUp={goOutOnEsc}
            autoFocus
            onBlur={onBlur}
          />
        </form>
      ) : (
        <p
          className="task-text--checked"
          onDoubleClick={() => {
            setEditing(props.todo.id);
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
