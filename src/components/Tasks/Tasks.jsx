import { Task } from "./Task";
import "./Tasks.css";

export const Tasks = (props) => {
  return (
    <div className="tasks">
      {props.todos.map((todo) => (
        <Task key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </div>
  );
};
