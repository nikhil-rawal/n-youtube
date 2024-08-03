import React from "react";
import ImageComp from "../utils/ImageComp";
import { useSelector } from "react-redux";
import { isMenuOpen } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const hoverProperty = "hover:bg-gray-200 hover:rounded-2xl";
  if (!isMenuOpen) return null;

  return (
    <div className="flex flex-col text-center">
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"home-icon"}
          srcname={
            "https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-512.png"
          }
        />
        <span className="text-center text-sm">Home</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"shorts-icon"}
          srcname={
            "https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png"
          }
        />
        <span className="text-center text-sm">Shorts</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"subscriptions-icon"}
          srcname={
            "https://cdn3.iconfinder.com/data/icons/social-media-2487/24/subscription-512.png"
          }
        />
        <span className="text-center text-sm">Subscription</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"home-icon"}
          srcname={
            "https://static-00.iconduck.com/assets.00/youtube-music-icon-512x512-tzy5jsl3.png"
          }
        />
        <span className="text-center text-sm">YouTube Music</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"history-icon"}
          srcname={"https://cdn-icons-png.freepik.com/512/2961/2961948.png"}
        />
        <span className="text-center text-sm">History</span>
      </div>
      <div className={`my-1 py-1 ${hoverProperty}`}>
        <ImageComp
          classname={"h-12 m-auto"}
          altname={"podcast-icon"}
          srcname={
            "https://www.shutterstock.com/image-vector/podcast-icon-vector-isolated-on-600nw-2368666423.jpg"
          }
        />
        <span className="text-center text-sm">Podcast</span>
      </div>
      <div className={`my-1 py-1 ${hoverProperty}`}>
        <ImageComp
          classname={"h-10 m-auto"}
          altname={"liked-icon"}
          srcname={
            "https://static.vecteezy.com/system/resources/thumbnails/000/422/468/small/Multimedia__28107_29.jpg"
          }
        />
        <span className="text-center text-sm">Liked</span>
      </div>
      <div className={`my-2 py-2 ${hoverProperty}`}>
        <ImageComp
          classname={"h-10 m-auto"}
          altname={"Trending-icon"}
          srcname={
            "https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png"
          }
        />
        <span className="text-center text-sm">Trending</span>
      </div>
    </div>
  );
};

export default Sidebar;
