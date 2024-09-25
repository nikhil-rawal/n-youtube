import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, toggleVideoPageTrue } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { setVideoData } from "../utils/appSlice";
import VideoFrame from "./VideoFrame";
import CommentsFrame from "./CommentsFrame";
import LiveChatFrame from "./LiveChatFrame";

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
    <div
      className={
        bgBright
          ? "grid grid-cols-12 p-0 m-0"
          : `grid grid-cols-12 brightness-50 blur-[1px] p-0 mx-0`
      }
    >
      <div className="flex flex-col col-span-8">
        <VideoFrame embedURL={embedURL} videoData={videoData} />
        <CommentsFrame videoID={videoId} />
      </div>
      <div className="flex flex-col col-span-4">
        <span className="text-xl mx-auto  text-rose-600  dark:bg-white rounded-sm px-2 font-medium">
          Dummy Youtube Chat
        </span>
        <LiveChatFrame />
      </div>
    </div>
  );
};

export default WatchPage;
