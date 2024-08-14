import React, { useState, useEffect } from "react";
import { yt_api_link } from "./constants";

const fetchData = () => {
  const [allVideos, setAllVideos] = useState("");

  const getVideos = async () => {
    const data = await fetch(yt_api_link);
    const json = data.json;
  };
  return <div>fetchData</div>;
};

export default fetchData;
