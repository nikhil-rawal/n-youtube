import React from "react";
import { formatNumber, formatTimeAgo } from "../utils/convertValues";

const VideoCard = ({
  info,
  customTitle,
  customThumbnail,
  customAlt,
  customBio,
}) => {
  return (
    <div className=" flex flex-col max-w-56 mx-4 my-4 cursor-pointer">
      <img
        className={
          (customThumbnail && "rounded-2xl w-44 object-contain") ||
          "rounded-2xl w-56"
        }
        src={customThumbnail || info?.snippet?.thumbnails?.high?.url}
        alt={customAlt || info?.snippet?.title}
      />
      <div className="m-1 pl-1 flex flex-col">
        <span className="text-md font-semibold truncate">
          {customTitle || info?.snippet?.title}
        </span>
        <span className="text-sm font-normal truncate">
          {customBio || info?.snippet?.channelTitle}
        </span>
        {customAlt && (
          <>
            <span className="text-md font-bold text-red-600">
              Higher Order Component
            </span>
            <span className="text-sm font-light text-red-600">
              Github {customAlt}
            </span>
          </>
        )}
        {info?.snippet?.publishedAt && (
          <>
            <span className="text-sm font-light">
              {formatNumber(info?.statistics?.viewCount)}
              {" views"}
              &nbsp;•&nbsp;
              {formatNumber(info?.statistics?.likeCount)}
              {" 👍🏻"}
            </span>
            <span className="text-sm font-light">
              {formatTimeAgo(info?.snippet?.publishedAt)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
