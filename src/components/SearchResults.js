import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { query, results } = location.state || {};
  const parsedResults = results ? JSON.parse(results) : null;
  console.log("results", results);
  console.log("parsed", parsedResults);

  return (
    <div className="ml-20">
      <h1>Search Results for: {query}</h1>
      <pre>{JSON.stringify(parsedResults, null, 2)}</pre>
    </div>
  );
};

export default SearchResults;
