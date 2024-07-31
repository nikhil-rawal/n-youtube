import React from "react";
import ImageComp from "../utils/ImageComp";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"home-icon"}
          srcname={
            "https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-512.png"
          }
        />
        <span className="text-center text-sm">Home</span>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"shorts-icon"}
          srcname={
            "https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png"
          }
        />
        <span className="text-center text-sm">Shorts</span>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"subscriptions-icon"}
          srcname={
            "https://cdn3.iconfinder.com/data/icons/social-media-2487/24/subscription-512.png"
          }
        />
        <span className="text-center text-sm">Subscriptions</span>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <ImageComp
          classname={"h-6 m-auto"}
          altname={"home-icon"}
          srcname={
            "https://static-00.iconduck.com/assets.00/youtube-music-icon-512x512-tzy5jsl3.png"
          }
        />
        <span className="text-center text-sm">YouTube Music</span>
      </div>
    </div>
  );
};

export default Sidebar;
