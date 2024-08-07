import React from "react";
import { useParams } from "react-router-dom";

const WatchPage = () => {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
};

export default WatchPage;
