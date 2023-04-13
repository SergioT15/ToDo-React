import React from "react";
import { Task } from "./Task";

import { useAppSelector } from "../../store/hooks";
import { TasksStyled } from "./Tasks.styled";

export const Tasks: React.FC = () => {

  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <TasksStyled>
      {todos?.length ? (
        todos?.map((todo, idx) => (
          <Task key={`${todo._id} ${idx}`} todo={todo} />
        ))
      ) : (
        <h3> Tasks not found</h3>
      )}
    </TasksStyled>
  );
};
