import React, { useEffect, useState, useRef } from "react";
import ImageComp from "../utils/ImageComp";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { yt_search_link } from "../utils/constants";
import { REACT_APP_YTKEY } from "../utils/constants";

import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSearchSuggestions("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const autocompleteSearches = searchFunction();
    }, 250);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery]);

  // const showSuggestions = () => {
  //   searchFunction();
  // };

  // YT Search Autocomplete
  const searchFunction = async () => {
    const data = await fetch(yt_search_link + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
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
      <div className="flex col-span-8 justify-center space-between">
        <div className="relative flex">
          <input
            ref={inputRef}
            className="w-[550px] h-[42px] p-4 rounded-l-full border border-solid outline-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <div
              className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-gray-200 rounded-full p-[6px]"
              onClick={() => {
                setSearchQuery("");
                setSearchSuggestions([]);
              }}
            >
              <RxCross1 className="size-5" />
            </div>
          )}
          <div className="flex items-center justify-center border h-[42px] w-14 bg-gray-50 hover:bg-gray-200 border-solid rounded-r-full">
            <button>
              <CiSearch className="size-6" />
            </button>
          </div>
          {searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 w-[550px] bg-white rounded shadow-black drop-shadow-lg py-2 mt-1">
              <ul className="py-2">
                {searchSuggestions.map((suggestion) => (
                  <li
                    className="pl-4 text-sm font-semibold hover:bg-gray-200 rounded border-white border py-2 flex items-center"
                    key={suggestion}
                  >
                    <CiSearch className="size-5 mr-2" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="ml-2 bg-gray-100 hover:bg-gray-200 cursor-pointer w-11 h-11 p-2 rounded-full flex items-center justify-center">
          <button>
            <MdKeyboardVoice className={`size-6`} />
          </button>
        </div>
      </div>
      <div className="flex col-span-2 justify-end ">
        <div className="ml-2 hover:bg-gray-200 cursor-pointer p-3 rounded-full flex items-center justify-center">
          <button>
            <RiVideoAddLine className={`size-6`} />
          </button>
        </div>
        <div className="ml-2 hover:bg-gray-200 cursor-pointer p-3 rounded-full flex items-center justify-center">
          <button>
            <MdOutlineNotificationsActive className={`size-6`} />
          </button>
        </div>
        <div className="ml-2 hover:bg-gray-200 cursor-pointer p-3 rounded-full flex items-center justify-center">
          <button>
            <BsFillMoonStarsFill className={`size-6`} />
          </button>
        </div>
        <div className="ml-2 hover:bg-gray-200 cursor-pointer p-3 rounded-full flex items-center justify-center">
          <button>
            <LuSun className={`size-6`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
