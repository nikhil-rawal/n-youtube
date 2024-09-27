import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ResultsVideoCard from "./ResultsVideoCard";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, toggleVideoPageFalse } from "../utils/appSlice";
import ButtonList from "./ButtonList";

// slice for menu.then ml-44 || undefined.then populate results

const SearchResults = React.memo(() => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const { results } = location.state || {};
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
  }, [dispatch]);

  console.log(searchResults?.items);
  return (
    <div className={!isMenuOpen ? `ml-44` : `ml-12`}>
      <div className="ml-5 overflow-x-scroll">
        <ButtonList />
      </div>
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
