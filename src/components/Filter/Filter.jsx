import React from "react";
import Active from "./Active";
import { All } from "./All";
import { Completed } from "./Completed";
import "./Filter.css"

export const Filter = () => {
  return (
  <>
  <All/>
  <Active/>
  <Completed/>
  </>
  )
};


