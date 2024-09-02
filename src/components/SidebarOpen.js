import React from "react";
import { Link } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineSelfImprovement } from "react-icons/md";

const SidebarOpen = () => {
  return (
    <div className="flex flex-col hover:bg-top bg-bottom pl-[2px] z-10 sidebar-open">
      <div className="flex flex-col">
        <Link to="/">
          <div className="flex flex-row items-center justify-center py-[12px] px-[24px] mx-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
            <button>
              <IoMdHome className="size-5" />
            </button>
            <p className="text-[14px]">Home</p>
          </div>
        </Link>
        <div className="">
          <button>
            <SiYoutubeshorts className="size-5" />
          </button>
          <p className="">Shorts</p>
        </div>
        <div className="">
          <button>
            <MdOutlineSubscriptions className="size-5" />
          </button>
          <p className="">Subscriptions</p>
        </div>
        <div className="">
          <button>
            <SiYoutubemusic className="size-5" />
          </button>
          <p className="">YouTube Music</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarOpen;
