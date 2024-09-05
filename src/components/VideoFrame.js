import React from "react";
import { formatNumber } from "../utils/convertValues";

const VideoFrame = ({ embedURL, videoData }) => {
  return (
    <div className="">
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

export default VideoFrame;
