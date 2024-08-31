import React from "react";
import { useSelector } from "react-redux";

import SidebarCollapsed from "./SidebarCollapsed";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state?.app?.isMenuOpen);
  if (!isMenuOpen) return null;
  else
    return (
      <>
        <SidebarCollapsed />
      </>
    );
};

export default Sidebar;
