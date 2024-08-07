import React from "react";
import ImageComp from "../utils/ImageComp";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const hoverCSS = "hover:bg-gray-200 hover:rounded-full";
  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-2 justify-start">
        <ImageComp
          onClickSource={() => toggleMenuHandler()}
          classNameSource={`h-9 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={`menu`}
          srcSource={`https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256`}
        />
        <ImageComp
          classNameSource={`h-8 mx-5 cursor-pointer`}
          altSource={"youtube-logo"}
          srcSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          }
        />
      </div>
      <div className="flex col-span-8 justify-center ">
        <div className="flex">
          <input
            className="w-96 h-9 p-4 rounded-l-full border border-solid outline-none "
            type="text"
            placeholder="Search"
          />
          <button className="h-9 rounded-r-full border border-solid">
            <ImageComp
              classNameSource={`h-8 mx-2`}
              altSource={"search-icon"}
              srcSource={
                "https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
              }
            />
          </button>
        </div>
        <ImageComp
          classNameSource={`h-7 mx-5 cursor-pointer ${hoverCSS}`}
          altSource={"search-using-voice"}
          srcSource={"https://www.svgrepo.com/show/44666/voice-recorder.svg"}
        />
      </div>
      <div className="flex col-span-2 justify-end ">
        <ImageComp
          classNameSource={`h-8 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={"create-video"}
          srcSource={"https://static.thenounproject.com/png/3750242-200.png"}
        />
        <ImageComp
          classNameSource={`h-8 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={"notifications-icon"}
          srcSource={
            "https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg"
          }
        />
        <ImageComp
          classNameSource={`h-8 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={"user-icon"}
          srcSource={
            "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          }
        />
        <ImageComp
          classNameSource={`h-8 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={"night-mode"}
          srcSource={
            "https://cdn4.iconfinder.com/data/icons/remixicon-weather/24/moon-clear-line-1024.png"
          }
        />
        <ImageComp
          classNameSource={`h-8 mx-4 cursor-pointer ${hoverCSS}`}
          altSource={"day-mode"}
          srcSource={
            "https://cdn3.iconfinder.com/data/icons/weather-free-2/32/Weather_Free_Outline_day-weather-sun-1024.png"
          }
        />
      </div>
    </div>
  );
};

export default Head;
