import { Task } from "./Task";

// import { useSelector } from "react-redux";

import styles from "./Tasks.module.css";

export const Tasks = (props) => {
  // const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles.task}>
      {props.todos.length !== 0 ? (
        props.todoFiltered[props.filter].map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            changeStatus={props.changeStatus}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          />
        ))
      ) : (
        <h3> Tasks not found</h3>
      )}
    </div>
  );
};
