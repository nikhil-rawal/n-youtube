import React from "react";
import { Link } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineSelfImprovement } from "react-icons/md";

const SidebarCollapsed = () => {
  const spanProperty = "my-2 text-center text-xs truncate";
  const divProperty =
    "truncate flex flex-col items-center justify-center py-[14px] my-1 hover:bg-gray-100 hover:rounded-2xl cursor-pointer";

  return (
    <div className="flex flex-col text-center hover:bg-top bg-bottom pl-2 z-10">
      <Link to="/">
        <div className={divProperty}>
          <button>
            <IoMdHome className="size-5" />
          </button>
          <span className={spanProperty}>Home</span>
        </div>
      </Link>
      <div className={divProperty}>
        <button>
          <SiYoutubeshorts className="size-5" />
        </button>
        <span className={spanProperty}>Shorts</span>
      </div>
      <div className={divProperty}>
        <button>
          <MdOutlineSubscriptions className="size-5" />
        </button>
        <span className={spanProperty}>Subscriptions</span>
      </div>
      <div className={divProperty}>
        <button>
          <SiYoutubemusic className="size-5" />
        </button>
        <span className={spanProperty}>YouTube Music</span>
      </div>
      <div className={divProperty}>
        <button>
          <MdOutlineSelfImprovement className="size-5" />
        </button>
        <span className={spanProperty}>You</span>
      </div>
    </div>
  );
};

export default SidebarCollapsed;
