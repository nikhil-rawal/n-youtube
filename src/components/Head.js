import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_YTKEY, yt_inputSearch_link } from "../utils/constants";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef(null);
  const handleClickOutsideRef = useRef();
  const dispatch = useDispatch();
  const themeData = useSelector((state) => state.app.themeMode);
  const navigate = useNavigate();

  // Handling click outside input bar
  const handleClickOutside = useCallback(
    (event) => {
      if (searchSuggestions?.length > 0) {
        if (inputRef?.current && !inputRef?.current.contains(event.target)) {
          setSearchSuggestions([]);
        }
      }
    },
    [searchSuggestions]
  );

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("themeData"));
    if (storedTheme) {
      dispatch(toggleTheme(storedTheme));
    }
    handleClickOutsideRef.current = handleClickOutside;
    document.addEventListener("mousedown", handleClickOutsideRef.current);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideRef.current);
    };
  }, [dispatch, handleClickOutside]);

  useEffect(() => {
    document.body.className = themeData === "dark" ? "dark" : "light";
  }, [themeData]);

  // Debouncing search requests
  useEffect(() => {
    if (inputValue) {
      const timer = setTimeout(() => {
        getSearchSuggestions(inputValue);
      }, 350);
      return () => clearTimeout(timer);
    } else if (!inputValue) {
      setSearchSuggestions([]);
    }
  }, [inputValue]);

  // Handling search input and sending to API
  const inputSearchHandler = useCallback(
    async (searchQuery) => {
      try {
        if (searchQuery) {
          const inputSearchURL = yt_inputSearch_link(
            searchQuery,
            REACT_APP_YTKEY
          );
          const response = await fetch(inputSearchURL);
          const json = await response?.json();
          //Navigate to new page with search results
          navigate(
            `/results?search_query=${searchQuery.replace(/\s+/g, "+")}`,
            {
              state: { query: searchQuery, results: JSON.stringify(json) },
            }
          );
        }
      } catch (error) {
        console.error("Error Fetching search results");
      }
    },
    [navigate]
  );

  // inputSearchHandler only when searchQuery updated
  useEffect(() => {
    if (searchQuery) {
      inputSearchHandler(searchQuery);
    }
  }, [searchQuery, inputSearchHandler]);

  // Toggle Menu Open Close
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // Toggle theme Day/Night
  const toggleThemeHandler = (mode) => {
    dispatch(toggleTheme(mode));
  };

  // Handling input form submission
  const submitFormHandler = useCallback(
    (e) => {
      if (inputValue) {
        e.preventDefault();
        setSearchQuery(inputValue);
        setInputValue("");
        setSearchSuggestions([]);
      }
    },
    [inputValue]
  );

  // Handling input bar change
  const changeInputValueHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Handling key events for navigation and selection
  const keyDownHandler = async (e) => {
    if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, searchSuggestions?.length - 1);
        // setInputValue(searchSuggestions[newIndex]);
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        // setInputValue(searchSuggestions[newIndex]);
        return newIndex;
      });
    } else if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0) {
        setInputValue(searchSuggestions[selectedSuggestionIndex]);
        setSearchQuery(inputValue);
        setSearchSuggestions([]);
        setSelectedSuggestionIndex(-1);
      } else {
        setSelectedSuggestionIndex(-1);
      }
    }
  };

  // YT Search Autocomplete search suggestions
  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
      );
      const json = await response?.json();
      setSearchSuggestions(json[1]);
    } catch (error) {
      console.error("Error while fetching suggestions");
    }
  };

  //HandleSuggestion onMouseOver
  const handleSuggestionOver = useCallback((suggestion) => {
    setInputValue(suggestion);
  }, []);

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
            <form onSubmit={submitFormHandler} className="flex">
              <input
                ref={inputRef}
                className="w-[550px] h-[42px] p-4 rounded-l-full border border-solid outline-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:bg-black dark:border-neutral-800"
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={changeInputValueHandler}
                onKeyDown={keyDownHandler}
              />
              {inputValue && (
                <div
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-gray-200  dark:hover:bg-neutral-800 rounded-full p-[6px]"
                  onClick={() => {
                    setInputValue("");
                    setSearchSuggestions([]);
                    setSearchQuery("");
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
                <ul
                  className="py-2 z-10"
                  role="listbox"
                  aria-label="Search Suggestions"
                >
                  {searchSuggestions?.map((suggestion, index) => (
                    <li
                      className={`pl-4 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-neutral-700 rounded border-white dark:border-neutral-900 border py-2 flex items-center z-20 ${
                        index === selectedSuggestionIndex
                          ? "bg-gray-200 dark:bg-neutral-700"
                          : ""
                      }`}
                      key={`${index}-${suggestion}-${index}`}
                      role="option"
                      aria-selected={index === selectedSuggestionIndex}
                      onMouseOver={() =>
                        handleSuggestionOver(suggestion, index)
                      }
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
