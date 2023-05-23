import React from "react";
import { Task } from "./Task";

import { useAppSelector } from "../../store/hooks";
import { TasksStyled } from "./Tasks.styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Tasks: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <TasksStyled>
      <TransitionGroup>
        {
          // todos?.length ? (
          todos?.map((todo, idx) => (
            <CSSTransition key={idx} timeout={500} classNames={"tasks"}>
              <Task key={`${todo.id} ${idx}`} todo={todo} />
            </CSSTransition>
          ))
          // ) : (
          //   <h3> Tasks not found</h3>
          // )
        }
      </TransitionGroup>
    </TasksStyled>
  );
};
