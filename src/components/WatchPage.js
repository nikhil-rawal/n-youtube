import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { formatNumber } from "../utils/convertValues";
import { setVideoData } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state?.app?.videoData); //coming from appSlice - videoData

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
    <div className="m-3 my-2 p-4">
      <iframe
        width="970"
        height="540"
        src={embedURL}
        style={{ border: "none", borderRadius: "15px" }}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {videoData && (
        <div className="flex flex-col mx-2 my-4 max-w-4xl">
          <span className="text-2xl font-semibold truncate">
            {videoData?.snippet?.title}
          </span>
          <div className="flex">
            <span className="text-sm font-normal	">
              {videoData?.snippet?.channelTitle}
            </span>
            <span className="text-sm font-light">
              {formatNumber(videoData?.statistics?.viewCount)}{" "}
              views&nbsp;•&nbsp;
              {formatNumber(videoData?.statistics?.commentCount)}{" "}
              comments&nbsp;•&nbsp;
              {formatNumber(videoData?.statistics?.likeCount)} likes
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
