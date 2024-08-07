import React from "react";
import { formatNumber, formatTimeAgo } from "../utils/convertValues";

const VideoCard = ({ info }) => {
  return (
    <div className=" flex flex-col max-w-56 mx-4 my-4 cursor-pointer">
      <img
        className="rounded-2xl w-56"
        src={info.snippet.thumbnails.high.url}
        alt={info.snippet.title}
      />
      <div className="m-1 pl-1 flex flex-col">
        <span className="text-md font-semibold truncate">
          {info.snippet.title}
        </span>
        <span className="text-sm font-normal	">{info.snippet.channelTitle}</span>
        <span className="text-sm font-light">
          {formatNumber(info.statistics.viewCount)} views&nbsp;•&nbsp;
          {formatNumber(info.statistics.likeCount)} 👍🏻
        </span>
        <span className="text-sm font-light">
          {formatTimeAgo(info.snippet.publishedAt)}
        </span>
      </div>
    </div>
  );
};
export default VideoCard;
