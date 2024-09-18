import React, { useCallback, useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ResultsVideoCard from "./ResultsVideoCard";
import { setVideoData } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const SearchResults = React.memo(() => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const { query, results } = location.state || {};
  const parsedResults = useMemo(() => {
    return results ? JSON.parse(results) : null;
  }, [results]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (parsedResults) {
      setSearchResults(parsedResults);
    }
  }, [parsedResults]);

  console.log(searchResults?.items?.map);
  return (
    <div className="flex flex-wrap m-2 p-2">
      {searchResults?.length > 1 &&
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
        ))}
    </div>
  );
});

export default SearchResults;
