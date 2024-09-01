import React from "react";
import { Link } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineSelfImprovement } from "react-icons/md";

const SidebarCollapsed = () => {
  const paraProperty = "mt-2 text-[9px] line-clamp-2";
  const divProperty =
    "w-16 truncate flex flex-col items-center justify-center py-[16px] my-1 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer";

  return (
    <div className="flex flex-col hover:bg-top bg-bottom pl-[2px] z-10 sidebar-collapsed">
      <Link to="/">
        <div className={divProperty}>
          <button>
            <IoMdHome className="size-5" />
          </button>
          <p className={paraProperty}>Home</p>
        </div>
      </Link>
      <div className={divProperty}>
        <button>
          <SiYoutubeshorts className="size-5" />
        </button>
        <p className={paraProperty}>Shorts</p>
      </div>
      <div className={divProperty}>
        <button>
          <MdOutlineSubscriptions className="size-5" />
        </button>
        <p className={paraProperty}>Subscriptions</p>
      </div>
      <div className={divProperty}>
        <button>
          <SiYoutubemusic className="size-5" />
        </button>
        <p className={paraProperty}>YouTube Music</p>
      </div>
      <div className={divProperty}>
        <button>
          <MdOutlineSelfImprovement className="size-5" />
        </button>
        <p className={paraProperty}>You</p>
      </div>
    </div>
  );
};

export default SidebarCollapsed;
