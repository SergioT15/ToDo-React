import React from "react";

export const FilterButton = (props) => {
  const onFirst = () => {
    props.setFilter(props.name);
  };

  return (
    <div>
      <button
        type="button"
        aria-pressed={props.isPressed}
        onClick={onFirst}
        style={{
          backgroundColor: props.isPressed && "rgb(47, 79, 79)",
          color: props.isPressed && "white",
        }}
      >
        {props.name}
      </button>
    </div>
  );
};
