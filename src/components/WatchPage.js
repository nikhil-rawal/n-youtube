import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { formatNumber } from "../utils/convertValues";
import { setVideoData } from "../utils/appSlice";
import VideoFrame from "./VideoFrame";
import CommentsFrame from "./CommentsFrame";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.app.videoData); //coming from appSlice - videoData

  useEffect(() => {
    dispatch(closeMenu());

    if (!videoData) {
      const storedVideo = JSON.parse(localStorage.getItem("videoData"));
      if (storedVideo) {
        dispatch(setVideoData(storedVideo));
      }
    }
  }, [dispatch, videoData]);

  const embedURL = "https://www.youtube.com/embed/" + videoId;
  return (
    <>
      <VideoFrame embedURL={embedURL} videoData={videoData} />
      <CommentsFrame videoID={videoId} />
    </>
  );
};

export default WatchPage;
