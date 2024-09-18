import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = React.memo(() => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const { query, results } = location.state || {};
  const parsedResults = useMemo(() => {
    return results ? JSON.parse(results) : null;
  }, [results]);

  useEffect(() => {
    console.log("useffect");
    if (parsedResults) {
      console.log("parsing");
      setSearchResults(parsedResults);
    }
  }, [parsedResults]);

  return (
    <div className="ml-20">
      <h1>Search Results for: {query}</h1>
    </div>
  );
});

export default SearchResults;
