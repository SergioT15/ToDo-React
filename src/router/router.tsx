// import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Help } from "../help/Help";
import { AboutUs } from "../about us/AboutUs";

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AboutUs />,
      children: [
        {
          path: "/Help",
          element: <Help />,
        },
      ],
    },
  ]);

  return router;
};
export default useRouter;
