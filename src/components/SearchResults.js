import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ResultsVideoCard from "./ResultsVideoCard";
import { setVideoData } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import { openMenu, toggleVideoPageFalse } from "../utils/appSlice";
import ButtonList from "./ButtonList";

// slice for menu.then ml-44 || undefined.then populate results

const SearchResults = React.memo(() => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const { query, results } = location.state || {};
  const parsedResults = useMemo(() => {
    return results ? JSON.parse(results) : null;
  }, [results]);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    if (parsedResults) {
      setSearchResults(parsedResults);
    }
  }, [parsedResults]);

  useEffect(() => {
    dispatch(openMenu());
    dispatch(toggleVideoPageFalse());
  }, []);

  console.log(searchResults?.items);
  return (
    <div className={!isMenuOpen ? `ml-44` : `ml-12`}>
      <div className="ml-5 overflow-x-scroll">
        <ButtonList />
      </div>
      {/* {
        <>
          <a
            href="https://github.com/nikhil-rawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AdCard
              key={userData?.id}
              customTitle={userData?.name}
              customThumbnail={userData?.avatar_url}
              customAlt={userData?.login}
              customBio={userData?.bio}
            />
          </a>
        </>
      } */}
      {searchResults?.items?.length > 1 &&
        searchResults?.items?.map((searchedVideoItem) => (
          <ResultsVideoCard
            info={searchedVideoItem}
            key={searchedVideoItem?.id?.videoId}
          />
        ))}
    </div>
  );
});

export default SearchResults;
