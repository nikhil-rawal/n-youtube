import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { query, results } = location.state || {};
  const parsedResults = results ? JSON.parse(results) : null;
  console.log("results", results);
  console.log("parsed", parsedResults);

// redux to send data, then fetch data in commentResults??? (haven't tried) (better approach?)
// useLocation RRD to send data and use here as soon as data is loaded. (till now unsuccessful) (will read documentation!!)
// want to make function?? (export const _____) (better than redux??)


return (
    <div className="ml-20">
      <h1>Search Results for: {query}</h1>
      <pre>{JSON.stringify(parsedResults, null, 2)}</pre>
    </div>
  );
};

export default SearchResults;
