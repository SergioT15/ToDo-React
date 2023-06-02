import React, { useEffect, useState, useRef } from "react";

import {
  Transition,
  SwitchTransition,
  CSSTransition,
} from "react-transition-group";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { Pages } from "./components/Pages";
import { AboutUs } from "./page/AboutUs";
import { Help } from "./page/Help";
// import { IndexPage } from "./page/IndexPage";
import { Layout } from "./Layout/Layout";

import { AppStyled } from "./App.styled";
import { getToDos } from "./api/todoApi";
import { useDispatch } from "react-redux";
import { setPages, setTodo, setAciveTodos } from "./store/todoSlice";
import { useAppSelector } from "./store/hooks";

// import useRouter from "./router/router";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const filter = useAppSelector((state) => state.todos.filter);
  const todos = useAppSelector((state) => state.todos.todos);
  const todosLength = todos.length;
  const countActiveTodo = useAppSelector((state) => state.todos.AciveTodos);
  const [loaderVisible, setLoaderVisible] = useState(true);

  const [toggle, setToggle] = useState(false);
  // const router = useRouter();

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

  // Timer
  const [seconds, setSeconds] = useState<number>(0);
  const timerId = useRef<NodeJS.Timeout>();
  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  return (
    <AppStyled>
      <div className="conteiner">
        <div>
          <SwitchTransition>
            <CSSTransition key={toggle} timeout={500} classNames="fade">
              <button onClick={() => setToggle(!toggle)}>
                {toggle ? "hello" : "goodbye"}
              </button>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <Title />
        <Form />
        {todosLength ? (
          <Tasks />
        ) : (
          <h3 className={"task-not-found"}> Tasks not found</h3>
        )}
        <Pages />
        <button onClick={startTimer}>Start</button>
        <p>{seconds}</p>
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
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<IndexPage />}></Route> */}
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/help" element={<Help />}></Route>
          </Route>
        </Routes>
      </div>

    </AppStyled>
  );
};

export { App };
