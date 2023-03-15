import React from "react";
import { Task } from "./Task";

import { useAppSelector } from "../../store/hooks";

import { todoFiltered } from "../../store/todoSlice";

// import styles from "./Tasks.module.css";
import { TasksStyled } from "./Tasks.styled";

// type ITodo = {
//   text: string;
//   id: string;
//   completed: boolean;
// };

// type ITodoState = {
//   todo: ITodo[];
// };

export const Tasks: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  const todoFiltere = useAppSelector(todoFiltered);

  return (
    <TasksStyled>
      {!!todos.length ? (
        todoFiltere.map((todo) => <Task key={todo.id} todo={todo} />)
      ) : (
        <h3> Tasks not found</h3>
      )}
    </TasksStyled>
  );
};
