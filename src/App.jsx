import { useState, useMemo } from "react";

// import { v4 as uuidv4 } from "uuid";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

import styles from "./App.module.css";

import { useSelector } from "react-redux";

const filterNames = ["All", "Active", "Completed"];

const App = () => {
  const todos = useSelector((state) => state.todos.todos);

  // const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(filterNames[0]);
  // const [isComletedAll, setIsComletedAll] = useState(true);

  const todoFiltered = useMemo(
    () => ({
      All: todos,
      Active: todos.filter((todo) => !todo.completed),
      Completed: todos.filter((todo) => todo.completed),
    }),
    [todos]
  );

  // Editing on doubleClick
  // function editTodo(id, newName) {
  //   const editedTodo = todos.map((todo) => {
  //     if (id !== todo.id) {
  //       return todo;
  //     }
  //     return { ...todo, text: newName };
  //   });
  //   setTodos(editedTodo);
  // }

  // Add new task
  // const addTodo = (todoText) => {
  //   if (!todoText.trim()) {
  //     return;
  //   }
  //   const newTask = {
  //     text: todoText,
  //     id: uuidv4(),
  //     completed: false,
  //   };

  //   setTodos([newTask, ...todos]);
  // };

  // Change completed and uncompleted
  // const changeStatus = (id) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (id !== todo.id) {
  //       return todo;
  //     }
  //     return { ...todo, completed: !todo.completed };
  //   });
  //   setTodos(updatedTodos);
  // };

  //Delete task
  // const deleteTodo = (id) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  //Change all statuses completed and incomplete
  // const changeAllStatuses = () => {
  //   const updatedTodos = todos.map((todo) => {
  //     setIsComletedAll(!isComletedAll);

  //     return { ...todo, completed: isComletedAll };
  //   });
  //   setTodos(updatedTodos);
  // };

  //Delete all completed tasks
  // const deleteAllCompleted = () => {
  //   const updatedTodos = todos.filter((todo) => !todo.completed);

  //   setTodos(updatedTodos);
  // };

  return (
    <div className={styles.app}>
      <div className={styles.conteiner}>
        <Title />
        <Form
        // addTodo={addTodo}
        />
        <Tasks
          todoFiltered={todoFiltered}
          filter={filter}
          // todos={todos}
          // changeStatus={changeStatus}
          // deleteTodo={deleteTodo}
          // editTodo={editTodo}
        />
        <Filter
          filter={filter}
          filterNames={filterNames}
          setFilter={setFilter}
          // todos={todos}
          // changeAllStatuses={changeAllStatuses}
          // deleteAllCompleted={deleteAllCompleted}
        />
      </div>
    </div>
  );
};

export { App };
