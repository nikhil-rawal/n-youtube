import React, { useEffect, useState } from "react";
import ImageComp from "../utils/ImageComp";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { yt_search_link } from "../utils/constants";
import { REACT_APP_YTKEY } from "../utils/constants";

import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState("");
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const autocompleteSearches = searchFunction();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // YT Search Autocomplete
  const searchFunction = async () => {
    const data = await fetch(yt_search_link + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    console.log(searchSuggestions);
  };

  // YT Search Results
  const tryData = async () => {
    const data1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone&key=${REACT_APP_YTKEY}`
    );
    const json1 = await data1.json();
    console.log(json1);
  };

  const hoverCSS = "cursor-pointer";
  return (
    <div className="grid grid-cols-12 p-2 m-2">
      <div className="flex col-span-2 justify-start">
        <div className="ml-1 hover:bg-gray-200 cursor-pointer p-3 rounded-full flex items-center justify-center">
          <button>
            <SlMenu onClick={() => toggleMenuHandler()} className={`size-5`} />
          </button>
        </div>
        <Link to="/">
          <div className="cursor-pointer my-2 ml-4">
            <img
              className="h-6"
              alt="youtube-logo"
              src="/yt_logo_rgb_light.png"
              //yt_logo_rgb_dark.png
            />
          </div>
        </Link>
      </div>
      <div className="flex col-span-8 justify-center ">
        <div className="flex">
          <div>
            <input
              className="w-96 h-9 p-4 rounded-l-full border border-solid outline-none "
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchSuggestions.length > 1 && (
              <span
                className="cursor-pointer fixed mt-[6px] -ml-7"
                onClick={() => {
                  setSearchSuggestions("");
                  setSearchQuery("");
                }}
              >
                ╳
              </span>
            )}

            {searchSuggestions.length > 1 && (
              <div className="w-96 h-9 py-[0.1rem] px-2 fixed ">
                <ul>
                  {searchSuggestions.map((suggestion) => (
                    <li
                      className="pl-2 bg-white hover:bg-gray-200 cursor-pointer rounded border-gray-100 py-2"
                      key={suggestion}
                    >
                      🔍 {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="border border-solid rounded-r-full">
            <button>
              <CiSearch className={`size-7`} />
            </button>
          </div>
          {/* <button className="h-9 rounded-r-full border border-solid">
            <ImageComp
              classNameSource={`h-8 mx-2`}
              altSource={"search-icon"}
              srcSource={
                "https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
              }
            />
          </button> */}
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
