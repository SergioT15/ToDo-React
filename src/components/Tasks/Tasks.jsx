import { Task } from "./Task";

import { useSelector } from "react-redux";

import { todoFiltered } from "../../store/todoSlice";

import styles from "./Tasks.module.css";

export const Tasks = (props) => {
  const todos = useSelector((state) => state.todos.todos);

  const todoFiltere = useSelector(todoFiltered);

  return (
    <div className={styles.task}>
      {!!todos.length ? (
        todoFiltere.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            // changeStatus={props.changeStatus}
            // deleteTodo={props.deleteTodo}
            // editTodo={props.editTodo}
          />
        ))
      ) : (
        <h3> Tasks not found</h3>
      )}
    </div>
  );
};
