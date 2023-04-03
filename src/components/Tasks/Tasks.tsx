import React from "react";
import { Task } from "./Task";

// import styles from "./Tasks.module.css";
import { TasksStyled } from "./Tasks.styled";
import { useGetAllTodosQuery } from "../../store/services/TodoService";


export const Tasks: React.FC = () => {

  const {data: todos} = useGetAllTodosQuery()

  return (
    <TasksStyled>
      {todos?.length ? (
        todos?.map((todo) => <Task key={todo._id} todo={todo} />)
      ) : (
        <h3> Tasks not found</h3>
      )}
    </TasksStyled>
  );
};