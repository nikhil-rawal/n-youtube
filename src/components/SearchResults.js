import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ResultsVideoCard from "./ResultsVideoCard";
import { setVideoData } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import { openMenu, toggleVideoPageFalse } from "../utils/appSlice";

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
    <div className={!isMenuOpen ? `ml-44` : undefined}>
      <VideoContainer />
    </div>
    // <div className={!isMenuOpen ? `ml-44` : undefined}>
    /* {searchResults?.length > 1 &&
        searchResults?.map((searchedVideoItem) => (
          <Link
            to={`/WatchPage?v=${searchedVideoItem?.id?.videoId}`}
            key={searchedVideoItem?.id?.videoId}
            onClick={() => dispatch(setVideoData(searchedVideoItem))} //sending data to appSlice - videoData
          >
            <ResultsVideoCard
              info={searchedVideoItem}
              key={searchedVideoItem?.id?.videoId}
            />
          </Link>
        ))} */
    // </div>
  );
});

export default SearchResults;
