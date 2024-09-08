import React from "react";
import { useSelector } from "react-redux";

import SidebarCollapsed from "./SidebarCollapsed";
import SidebarOpen from "./SidebarOpen";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state?.app?.isMenuOpen);
  const isVideoPage = useSelector((state) => state?.app?.isVideoPage);

  if (!isMenuOpen)
    return (
      <div className={isVideoPage ? "relative" : ""}>
        <SidebarOpen />
      </div>
    );
  else
    return (
      <div className={isVideoPage ? "hidden" : ""}>
        <SidebarCollapsed />
      </div>
    );
};

export default Sidebar;
