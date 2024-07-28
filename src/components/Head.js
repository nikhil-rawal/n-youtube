import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-2 justify-start">
        <img
          className="h-8 mx-2"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
        />
      </div>
      <div className="flex col-span-8 justify-center">
        <div className="flex border-gray-300 border border-solid rounded-3xl">
          <input
            className="mx-2 w-96 h-8 p-4"
            type="text"
            placeholder="Search"
          />
          <button className="">
            <img
              className="h-8 mr-2 bg-gray-700 hover:bg-red-700"
              alt="search-icon"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
            />
          </button>
        </div>

        <img
          className="h-8 mx-2"
          alt="search-using-voice"
          src="https://cdn-icons-png.flaticon.com/512/925/925441.png"
        />
      </div>
      <div className="flex col-span-2 justify-end">
        <img
          className="h-8 mx-2"
          alt="create-video"
          src="https://static.thenounproject.com/png/3750242-200.png"
        />
        <img
          className="h-8 mx-2"
          alt="notifications-icon"
          src="https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg"
        />
        <img
          className="h-8 mx-2"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
