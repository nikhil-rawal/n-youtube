import React, { useState, useEffect } from "react";
import { yt_api_link } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoData } from "../utils/appSlice";

const VideoContainer = () => {
  const [allVideos, setAllVideos] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(yt_api_link);
    const json = await data?.json();
    setAllVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap m-2 p-2">
      {allVideos?.length > 1 &&
        allVideos?.map((videoItem) => (
          <Link
            to={`/WatchPage?v=${videoItem?.id}`}
            onClick={() => dispatch(setVideoData(videoItem))} //sending data to appSlice - videoData
          >
            <VideoCard info={videoItem} key={videoItem?.id} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
