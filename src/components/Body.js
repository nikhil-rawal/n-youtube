import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

// for sm, md, lg, xl, 2xl

const Body = () => {
  return (
    <div className="flex mt-16 body">
      <div className="fixed h-screen overflow-y-scroll z-20 dark:bg-black bg-white">
        <Sidebar />
      </div>
      <div className="mt-2 ml-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
