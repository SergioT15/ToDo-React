import React from "react";
// import styles from "./CheckAll.module.css"
export const CheckAll = (props) => {
  return (
    <div>
      {props.todos.length !== 0 && (
        <button onClick={() => props.changeAllStatuses()}>Check All</button>
      )}
    </div>
  );
};
