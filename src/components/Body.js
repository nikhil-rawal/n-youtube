import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-16 body">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="mt-2 ml-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
