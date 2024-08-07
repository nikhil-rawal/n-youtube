import React, { useState, useEffect } from "react";
import { yt_api_link } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [allVideos, setAllVideos] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(yt_api_link);
    const json = await data.json();
    setAllVideos(json.items);
  };

  return (
    <div className="flex flex-wrap m-2 p-2">
      {allVideos.length > 1 &&
        allVideos.map((videoItem) => (
          <VideoCard info={videoItem} key={videoItem.id} />
        ))}
    </div>
  );
};

export default VideoContainer;
