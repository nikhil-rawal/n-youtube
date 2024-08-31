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
    <div className="flex flex-col max-w-[322px] mx-2 my-4 cursor-pointer">
      <img
        className={
          (customThumbnail &&
            "rounded-2xl w-[188px] object-contain line-clamp-3") ||
          "hover:rounded-none rounded-xl w-[322px] h-[181px] transition-all duration-300 ease-in delay-150"
        }
        src={customThumbnail || info?.snippet?.thumbnails?.maxres?.url}
        alt={customAlt || info?.snippet?.title}
      />
      <div className="m-1 pl-1 flex flex-col">
        {/* <div className="flex flex-row"> */}
        {/* <div>
            <img
              className="w-12 h-12 rounded-full"
              src={customThumbnail || info?.snippet?.thumbnails?.maxres?.url}
              alt={customAlt || info?.snippet?.title}
            />
          </div> */}
        <span className="text-md font-semibold line-clamp-2 text-ellipsis">
          {customTitle || info?.snippet?.title}
        </span>
        {/* </div> */}
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
            <span className="text-sm font-light py-1">
              {formatNumber(info?.statistics?.viewCount)}
              {" views"}
              &nbsp;•&nbsp;
              {formatTimeAgo(info?.snippet?.publishedAt)}
              {/* {formatNumber(info?.statistics?.likeCount)}
              {" 👍🏻"} */}
            </span>
            {/* <span className="text-sm font-light">
              {formatTimeAgo(info?.snippet?.publishedAt)}
            </span> */}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
