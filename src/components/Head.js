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

// https://developers.google.com/youtube/v3/docs/search
// google api for search

const Head = () => {
  const [hoveredSuggestion, setHoveredSuggestion] = useState("");
  const [finalSearchQuery, setFinalSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const themeData = useSelector((state) => state.app.themeMode);

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("themeData"));
    if (storedTheme) {
      dispatch(toggleTheme(storedTheme));
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    document.body.className = themeData === "dark" ? "dark" : "light";
  }, [themeData]);

  // Debouncing search requests
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery && !hoveredSuggestion) {
        searchFunction();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, hoveredSuggestion]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = (mode) => {
    dispatch(toggleTheme(mode));
  };

  const handleClickOutside = (event) => {
    if (inputRef?.current && !inputRef?.current.contains(event.target)) {
      setSearchSuggestions([]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setFinalSearchQuery(searchQuery);
    inputSearchHandler(finalSearchQuery);
  };

  const handleInputChange = (e) => {
    if (hoveredSuggestion) {
      setSearchQuery(hoveredSuggestion);
      setHoveredSuggestion("");
    } else {
      setSearchQuery(e.target.value);
    }
  };

  const handleMouseOver = (suggestion) => {
    setHoveredSuggestion(suggestion);
  };

  // Handling key events for navigation and selection
  const handleKeyDown = async (e) => {
    if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchSuggestions?.length - 1)
      );
      setSearchQuery(searchSuggestions[selectedSuggestionIndex]);
    } else if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setSearchQuery(searchSuggestions[selectedSuggestionIndex]);
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        // setSearchQuery(searchSuggestions[selectedSuggestionIndex]);
        setSearchSuggestions([]);
        setSelectedSuggestionIndex(-1);
        setFinalSearchQuery(searchQuery);
      } else {
        inputSearchHandler(finalSearchQuery);
        setSelectedSuggestionIndex(-1);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion);
    setSearchQuery(suggestion);
    setSearchSuggestions([]);
    // setFinalSearchQuery(searchQuery)
  };

  // YT Search Autocomplete search suggestions
  const searchFunction = async () => {
    const response = await fetch(yt_search_link + searchQuery);
    const json = await response?.json();
    setSearchSuggestions(json[1]);
  };

  // Handling search input and sending to API
  const inputSearchHandler = async (query) => {
    console.log(query);
  };

  // const response = await fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone&key=${REACT_APP_YTKEY}`
  // );
  // const json = await response?.json();
  // console.log("Youtube Search", json);

  searchQuery && console.log("Query", searchQuery);
  selectedSuggestionIndex && console.log("Index", selectedSuggestionIndex);
  searchSuggestions.length > 0 && console.log("Suggestions", searchSuggestions);
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
              />
              {searchQuery && (
                <div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-gray-200  dark:hover:bg-neutral-800 rounded-full p-[6px]"
                  onClick={() => {
                    setSearchQuery("");
                    // setFinalSearchQuery("");
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
            {searchSuggestions?.length > 0 && (
              <div className="absolute top-full left-0 w-[550px] bg-white dark:bg-neutral-900 rounded-md shadow-black drop-shadow-lg py-2 mt-1 cursor-default">
                <ul className="py-2">
                  {searchSuggestions?.map((suggestion, index) => (
                    <li
                      className={`pl-4 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-neutral-700 rounded border-white dark:border-neutral-900 border py-2 flex items-center ${
                        index === selectedSuggestionIndex
                          ? "bg-gray-200 dark:bg-neutral-700"
                          : ""
                      }`}
                      key={`${index}-${suggestion}-${index}`}
                      onClick={() => handleSuggestionClick(suggestion)}
                      onMouseOver={() => handleMouseOver(suggestion)}
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

/*

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { yt_search_link, REACT_APP_YTKEY } from "../utils/constants";
import { SlMenu, CiSearch, RxCross1, MdKeyboardVoice, RiVideoAddLine, MdOutlineNotificationsActive, BsFillMoonStarsFill, LuSun } from "react-icons/all";

const Head = () => {
  const [finalSearchQuery, setFinalSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const themeData = useSelector((state) => state.app.themeMode);

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("themeData"));
    if (storedTheme) {
      dispatch(toggleTheme(storedTheme));
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    document.body.className = themeData === "dark" ? "dark" : "light";
  }, [themeData]);

  // Debouncing search requests
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        searchFunction();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = (mode) => {
    dispatch(toggleTheme(mode));
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSearchSuggestions([]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFinalSearchQuery(searchQuery);
    inputSearchHandler(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handling key events for navigation and selection
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, searchSuggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        setSearchQuery(searchSuggestions[selectedSuggestionIndex]);
        setFinalSearchQuery(searchSuggestions[selectedSuggestionIndex]);
        setSearchSuggestions([]);
      } else {
        inputSearchHandler(searchQuery);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setFinalSearchQuery(suggestion);
    setSearchSuggestions([]);
  };

  // Fetching search suggestions
  const searchFunction = async () => {
    const response = await fetch(`${yt_search_link}${searchQuery}`);
    const json = await response.json();
    setSearchSuggestions(json[1]);
  };

  // Handling search input and sending to API
  const inputSearchHandler = async (query) => {
    console.log(query);
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${REACT_APP_YTKEY}`
    // );
    // const json = await response.json();
    // console.log("Youtube Search", json);
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 bg-white dark:bg-black p-2 px-6">
      <div className="grid grid-cols-12">
        <div className="flex col-span-2 justify-start">
          <div
            className="-ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
            onClick={toggleMenuHandler}
          >
            <SlMenu className="size-5" />
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
                onKeyDown={handleKeyDown} // Added key down event handler
              />
              {searchQuery && (
                <div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-full p-[6px]"
                  onClick={() => {
                    setSearchQuery("");
                    setFinalSearchQuery("");
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
            {searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-[550px] bg-white dark:bg-neutral-900 rounded-md shadow-black drop-shadow-lg py-2 mt-1 cursor-default">
                <ul className="py-2">
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      className={`pl-4 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-neutral-700 rounded border-white dark:border-neutral-900 border py-2 flex items-center ${
                        index === selectedSuggestionIndex
                          ? "bg-gray-200 dark:bg-neutral-700"
                          : ""
                      }`}
                      key={index}
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
            <MdKeyboardVoice className="size-6" />
          </div>
        </div>
        <div className="flex col-span-2 justify-end">
          <div className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center">
            <RiVideoAddLine className="size-6" />
          </div>
          <div className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center">
            <MdOutlineNotificationsActive className="size-6" />
          </div>
          {themeData === "light" ? (
            <div
              className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
              onClick={() => toggleThemeHandler("dark")}
            >
              <BsFillMoonStarsFill className="size-6" />
            </div>
          ) : (
            <div
              className="ml-2 hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer p-3 rounded-full flex items-center justify-center"
              onClick={() => toggleThemeHandler("light")}
            >
              <LuSun className="size-6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;


*/
