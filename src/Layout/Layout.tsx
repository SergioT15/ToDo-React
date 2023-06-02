import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/">Close</Link>
        <Link to="aboutus">About us</Link>
        <Link to="help">Help</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export { Layout };
