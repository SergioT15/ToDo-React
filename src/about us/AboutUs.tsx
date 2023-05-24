import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Link to="/"> About us </Link>
      <Link to="/Help"> Help</Link>
      <div>
        This site is needed to store, change, mark the completion of tasks
      </div>
    </div>
  );
};

export { AboutUs };
