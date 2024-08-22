import React from "react";
import ImageComp from "../utils/ImageComp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineSelfImprovement } from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const spanProperty = "my-2 text-center text-xs truncate";
  const divProperty =
    "flex flex-col items-center justify-center py-4 hover:bg-gray-100 hover:rounded-2xl cursor-pointer";
  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col text-center hover:bg-top bg-bottom">
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

      {/* <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-6 m-auto"}
          altSource={"subscriptions-icon"}
          srcSource={
            "https://cdn3.iconfinder.com/data/icons/social-media-2487/24/subscription-512.png"
          }
        />
        <span className="text-center text-sm">Subscription</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-6 m-auto"}
          altSource={"home-icon"}
          srcSource={
            "https://static-00.iconduck.com/assets.00/youtube-music-icon-512x512-tzy5jsl3.png"
          }
        />
        <span className="text-center text-sm">YouTube Music</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-6 m-auto"}
          altSource={"history-icon"}
          srcSource={"https://cdn-icons-png.freepik.com/512/2961/2961948.png"}
        />
        <span className="text-center text-sm">History</span>
      </div>
      <div className={`my-1 py-1 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-12 m-auto"}
          altSource={"podcast-icon"}
          srcSource={
            "https://www.shutterstock.com/image-vector/podcast-icon-vector-isolated-on-600nw-2368666423.jpg"
          }
        />
        <span className="text-center text-sm">Podcast</span>
      </div>
      <div className={`my-1 py-1 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-10 m-auto"}
          altSource={"liked-icon"}
          srcSource={
            "https://static.vecteezy.com/system/resources/thumbnails/000/422/468/small/Multimedia__28107_29.jpg"
          }
        />
        <span className="text-center text-sm">Liked</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classNameSource={"h-10 m-auto"}
          altSource={"Trending-icon"}
          srcSource={
            "https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png"
          }
        />
        <span className="text-center text-sm">Trending</span>
      </div> */}
    </div>
  );
};

export default Sidebar;
