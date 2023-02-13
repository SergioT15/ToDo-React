import React from "react";

import styles from "./FilterButton.module.css";

export const FilterButton = (props) => {
  const changeName = () => {
    props.setFilter(props.name);
  };

  return (
    <div>
      <button
        type="button"
        onClick={changeName}
        className={`${props.isPressed ? styles.filterButtonGreen : ""}`}
      >
        {props.name}
      </button>
    </div>
  );
};
