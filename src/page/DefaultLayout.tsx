import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export { DefaultLayout };
