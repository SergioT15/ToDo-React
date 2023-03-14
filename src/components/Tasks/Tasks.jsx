import { Task } from "./Task";

import { useSelector } from "react-redux";

import { todoFiltered } from "../../store/todoSlice";

// import styles from "./Tasks.module.css";
import { TasksStyled } from "./Tasks.styled";

export const Tasks = (props) => {
  const todos = useSelector((state) => state.todos.todos);

  const todoFiltere = useSelector(todoFiltered);

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
