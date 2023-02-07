import { Task } from "./Task";
import "./Tasks.css";

export const Tasks = (props) => {
  return (
    <div className="tasks">
      {props.todos.length !== 0 ? (
        props.todos.map((todo) => (
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
