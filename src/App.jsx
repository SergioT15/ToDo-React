import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";

import styles from "./App.module.css";

const filterMap = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};

const filterNames = Object.keys(filterMap);

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(filterNames[0]);

  const todofiltered = todos.filter(filterMap[filter]);

  // Editing on doubleClick
  function editTodo(id, newName) {
    const editedTodo = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      }
      return { ...todo, text: newName };
    });
    setTodos(editedTodo);
  }

  // Add new task
  const addTodo = (todoText) => {
    if (!todoText.trim()) {
      return;
    }
    const newTask = {
      text: todoText,
      id: uuidv4(),
      completed: false,
    };

    setTodos([newTask, ...todos]);
  };

  // Change completed and uncompleted
  const changeStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id !== todo.id) {
        return todo;
      }
      return { ...todo, completed: !todo.completed };
    });
    setTodos(updatedTodos);
  };

  //Delete task
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //Change all statuses completed and incomplete
  const changeAllStatuses = () => {
    const updatedTodos = todos.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
    setTodos(updatedTodos);
  };

  //Delete all completed tasks
  const deleteAllCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);

    setTodos(updatedTodos);
  };

  return (
    <div className={styles.app}>
      <div className={styles.conteiner}>
        <Title />
        <Form addTodo={addTodo} />
        <Tasks
          todofiltered={todofiltered}
          todos={todos}
          changeStatus={changeStatus}
          deleteTodo={deleteTodo}
          filterMap={filterMap}
          filter={filter}
          editTodo={editTodo}
        />
        <Filter
          filter={filter}
          filterNames={filterNames}
          setFilter={setFilter}
          todos={todos}
          changeAllStatuses={changeAllStatuses}
          deleteAllCompleted={deleteAllCompleted}
        />
      </div>
    </div>
  );
};

export { App };
