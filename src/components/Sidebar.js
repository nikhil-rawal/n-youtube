import React from "react";
import { useSelector } from "react-redux";

import SidebarCollapsed from "./SidebarCollapsed";
import SidebarOpen from "./SidebarOpen";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state?.app?.isMenuOpen);
  if (!isMenuOpen)
    return (
      <>
        <SidebarOpen />
      </>
    );
  else
    return (
      <>
        <SidebarCollapsed />
      </>
    );
};

export default Sidebar;
