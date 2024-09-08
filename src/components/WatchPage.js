import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, toggleVideoPageTrue } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { setVideoData } from "../utils/appSlice";
import VideoFrame from "./VideoFrame";
import CommentsFrame from "./CommentsFrame";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.app.videoData); //coming from appSlice - videoData
  const bgBright = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    dispatch(openMenu());
    dispatch(toggleVideoPageTrue());

    if (!videoData) {
      const storedVideo = JSON.parse(localStorage.getItem("videoData"));
      if (storedVideo) {
        dispatch(setVideoData(storedVideo));
      }
    }
  }, [dispatch, videoData]);

  const embedURL = "https://www.youtube.com/embed/" + videoId;
  return (
    <div className={bgBright ? "flex" : `flex brightness-50 blur-[1px]`}>
      <VideoFrame embedURL={embedURL} videoData={videoData} />
      <CommentsFrame videoID={videoId} />
    </div>
  );
};

export default WatchPage;
