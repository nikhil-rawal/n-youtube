import React from "react";
import { Link } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill, RiMovie2Line } from "react-icons/ri";
import {
  MdOndemandVideo,
  MdOutlineWatchLater,
  MdOutlinePodcasts,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaFireAltSolid } from "react-icons/lia";
import { PiMusicNoteLight, PiLightbulb } from "react-icons/pi";
import { CgLivePhoto } from "react-icons/cg";
import { SlGameController } from "react-icons/sl";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { GiSportMedal } from "react-icons/gi";

const SidebarOpen = () => {
  return (
    <div className="flex flex-col hover:bg-top bg-bottom pl-[2px] z-10 sidebar-open w-52 overflow-y-scroll h-full">
      <div className="flex flex-col">
        <Link to="/">
          <div className="flex flex-row py-[12px] px-6 hover:bg-gray-200 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
            <button>
              <IoMdHome className="size-5" />
            </button>
            <p className="text-[14px] ml-4">Home</p>
          </div>
        </Link>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <SiYoutubeshorts className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Shorts</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <MdOutlineSubscriptions className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Subscriptions</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <SiYoutubemusic className="size-5" />
          </button>
          <p className="text-[14px] ml-4">YouTube Music</p>
        </div>
      </div>
      <hr className="h-[0.5px] my-4 bg-neutral-800 border-0 dark:bg-gray-100 w-11/12 m-auto"></hr>
      <div className="flex flex-col">
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:rounded-xl cursor-pointer">
          <p className="text-[18px]">You</p>
          <button className="ml-2">
            <FaChevronRight className="size-4" />
          </button>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <GrChannel className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Your channel</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <FaHistory className="size-5" />
          </button>
          <p className="text-[14px] ml-4">History</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <RiPlayList2Fill className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Playlist</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <MdOndemandVideo className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Your videos</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <MdOutlinePodcasts className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Your podcasts</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <MdOutlineWatchLater className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Watch later</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <AiOutlineLike className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Liked videos</p>
        </div>
      </div>
      <hr className="h-[0.5px] my-4 bg-neutral-800 border-0 dark:bg-gray-100 w-11/12 m-auto"></hr>
      <div className="flex flex-col">
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:rounded-xl cursor-pointer">
          <p className="text-[18px] font-semibold">Explore</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <LiaFireAltSolid className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Trending</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <PiMusicNoteLight className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Music</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <RiMovie2Line className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Movies & TV</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <CgLivePhoto className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Live</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <SlGameController className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Gaming</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <IoNewspaperOutline className="size-5" />
          </button>
          <p className="text-[14px] ml-4">News</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <GiSportMedal className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Sports</p>
        </div>
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <PiLightbulb className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Learning</p>
        </div>
      </div>
      <hr className="h-[0.5px] my-4 bg-neutral-800 border-0 dark:bg-gray-100 w-11/12 m-auto"></hr>
      <div className="flex flex-col">
        <div className="flex flex-row py-[12px] px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:rounded-xl cursor-pointer">
          <button>
            <IoSettingsOutline className="size-5" />
          </button>
          <p className="text-[14px] ml-4">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarOpen;
