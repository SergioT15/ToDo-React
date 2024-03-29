import React, { useEffect, useState } from "react";

import {
  Transition,
  // TransitionGroup,
  // SwitchTransition,
  // CSSTransition,
} from "react-transition-group";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { Pages } from "./components/Pages";

import { AppStyled } from "./App.styled";
import { getToDos } from "./api/todoApi";
import { useDispatch } from "react-redux";
import { setPages, setTodo, setAciveTodos } from "./store/todoSlice";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const filter = useAppSelector((state) => state.todos.filter);
  const todos = useAppSelector((state) => state.todos.todos);
  const todosLength = todos.length;
  const countActiveTodo = useAppSelector((state) => state.todos.AciveTodos);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getToDos(currentPage, filter);
        dispatch(setTodo(response.todos));
        dispatch(setPages(response.info.pages));
        dispatch(setAciveTodos(response.info.count_active_todos));
        setLoaderVisible(false);
      } catch (err) {
        console.log(`Error! Unable to get todos! ${err}`);
      }
    })();
  }, [currentPage, filter, todosLength, countActiveTodo]);

  // const [toggle, setToggle] = useState(false);

  // const [seconds, setSeconds] = useState(0);

  // const timerId = useRef("");

  // const startTimer = () => {
  //   timerId.current = setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);
  // };

  return (
    <AppStyled>
      <div className="conteiner">
        {/* <div>
          <SwitchTransition >
            <CSSTransition key={toggle} timeout={500} classNames="fade">
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? "hello" : "goodbye"}
              </button>
            </CSSTransition>
          </SwitchTransition>
        </div> */}
        <Title />
        <Form />
        {todosLength ? (
          <Tasks />
        ) : (
          <h3 className={"task-not-found"}> Tasks not found</h3>
        )}
        <Pages />
        {/* <button onClick={startTimer}>Start</button>
      <p>{seconds}</p> */}
        <Filter />
        <div className="wrap">
          <Transition
            in={loaderVisible}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            {(state: any) => <div className={`circle ${state}`} />}
          </Transition>
        </div>
      </div>
    </AppStyled>
  );
};

export { App };
