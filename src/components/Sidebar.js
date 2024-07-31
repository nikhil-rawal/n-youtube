import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <img
          className="h-10 m-auto"
          alt="home-icon"
          src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-512.png"
        />
        <h1>Home</h1>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <img
          className="h-10 m-auto"
          alt="shorts-icon"
          src="https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png"
        />
        <h1>Shorts</h1>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <img
          className="h-10 m-auto"
          alt="subscriptions-icon"
          src="https://cdn3.iconfinder.com/data/icons/social-media-2487/24/subscription-512.png"
        />
        <h1>Subscriptions</h1>
      </div>
      <div className="my-2 py-2 hover:bg-gray-200 hover:rounded-2xl">
        <img
          className="h-10 m-auto"
          alt="home-icon"
          src="https://static-00.iconduck.com/assets.00/youtube-music-icon-512x512-tzy5jsl3.png"
        />
        <h1>YouTube Music</h1>
      </div>
    </div>
  );
};

export default Sidebar;
