import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { yt_search_link } from "../utils/constants";
import { REACT_APP_YTKEY } from "../utils/constants";
import { toggleTheme } from "../utils/appSlice";

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
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  // const [theme, setTheme] = useState("light");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const themeData = useSelector((state) => state.app.themeMode);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = (mode) => {
    dispatch(toggleTheme(mode));
  };

  const handleClickOutside = (event) => {
    if (inputRef?.current && !inputRef?.current.contains(event.target)) {
      setSearchSuggestions(null);
    }
  };

  const handleFormSubmit = () => {};

  const handleInputChange = () => {};

  const handleKeyDown = () => {};

  const handleKeyUp = () => {};

  const handleSuggestionClick = () => {};

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("themeData"));
    if (storedTheme) {
      dispatch(toggleTheme(storedTheme));
    }
    const timer = setTimeout(() => {
      const autocompleteSearches = searchFunction();
    }, 300);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchQuery, dispatch]);

  useEffect(() => {
    document.body.className = themeData === "dark" ? "dark" : "light";
  }, [themeData]);

  // useEffect(() => {
  // inputSearchHandler();
  // }, [searchSuggestions]);

  // YT Search Autocomplete
  const searchFunction = async () => {
    const response = await fetch(yt_search_link + searchQuery);
    const json = await response?.json();
    setSearchSuggestions(json[1]);
  };

  // YT Search Results --------------------------------

  const inputSearchHandler = async (query) => {
    // console.log(query);
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone&key=${REACT_APP_YTKEY}`
    // );
    // const json = await response?.json();
    // console.log("Youtube Search", json);
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 bg-white dark:bg-black p-2 px-6">
      <div className="grid grid-cols-12">
        <div className="flex col-span-2 justify-start">
          <div
            className="-ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
            onClick={() => toggleMenuHandler()}
          >
            <button>
              <SlMenu className={`size-5`} />
            </button>
          </div>
          <Link to="/">
            <div className="cursor-pointer my-3 ml-4">
              <img
                className="h-6"
                alt="youtube-logo"
                src={
                  themeData === "light"
                    ? "/yt_logo_rgb_light.png"
                    : "yt_logo_rgb_dark.png"
                }
              />
            </div>
          </Link>
        </div>
        <div className="flex col-span-8 justify-center space-between">
          <div className="relative flex">
            <form onSubmit={handleFormSubmit} className="flex">
              <input
                ref={inputRef}
                className="w-[550px] h-[42px] p-4 rounded-l-full border border-solid outline-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:bg-black dark:border-neutral-800"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
              />

              {searchQuery && (
                <div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-gray-200  dark:hover:bg-neutral-800 rounded-full p-[6px]"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchSuggestions([]);
                  }}
                >
                  <RxCross1 className="size-5" />
                </div>
              )}
              <div className="flex items-center justify-center border h-[42px] w-14 bg-gray-50 dark:bg-gray-950 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800 border-solid rounded-r-full">
                <button type="submit">
                  <CiSearch className="size-6" />
                </button>
              </div>
            </form>
            {searchSuggestions?.length > 1 && (
              <div className="absolute top-full left-0 w-[550px] bg-white dark:bg-neutral-900 rounded-md shadow-black drop-shadow-lg py-2 mt-1 cursor-default">
                <ul className="py-2">
                  {searchSuggestions?.map((suggestion, index) => (
                    <li
                      className={`pl-4 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-neutral-700 rounded border-white dark:border-neutral-900 border py-2 flex items-center `}
                      /*
                      
                      ${
                        index === selectedSuggestionIndex ? "bg-gray-200 dark:bg-neutral-700" : ""
                      }

                      */
                      key={`${index}-${suggestion}-${index}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <CiSearch className="size-5 mr-2" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="ml-2 bg-gray-100 dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer w-11 h-11 p-2 rounded-full flex items-center justify-center">
            <button>
              <MdKeyboardVoice className={`size-6`} />
            </button>
          </div>
        </div>
        <div className="flex col-span-2 justify-end ">
          <div className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center">
            <button>
              <RiVideoAddLine className={`size-6`} />
            </button>
          </div>
          <div className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center">
            <button>
              <MdOutlineNotificationsActive className={`size-6`} />
            </button>
          </div>
          {themeData === "light" ? (
            <div
              className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
              onClick={() => toggleThemeHandler("dark")}
            >
              <button>
                <BsFillMoonStarsFill className={`size-6`} />
              </button>
            </div>
          ) : (
            <div
              className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
              onClick={() => toggleThemeHandler("light")}
            >
              <button>
                <LuSun className={`size-6`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
