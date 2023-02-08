import { Task } from "./Task";

import styles from "./Tasks.module.css";

export const Tasks = (props) => {
  return (
    <div className={styles.task}>
      {props.todos.length !== 0 ? (
        props.todos
          .filter(props.filterMap[props.filter])
          .map((todo) => (
            <Task
              key={todo.id}
              todo={todo}
              changeStatus={props.changeStatus}
              deleteTodo={props.deleteTodo}
            />
          ))
      ) : (
        <h3> Tasks not found</h3>
      )}
    </div>
  );
};
