import React from "react";
import { formatNumber, formatTimeAgo } from "../utils/convertValues";
import { useSelector } from "react-redux";

const VideoCard = ({
  info,
  customTitle,
  customThumbnail,
  customAlt,
  customBio,
}) => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div
      className={`flex flex-col max-w-[322px] mx-2 my-4 cursor-pointer ${
        !isMenuOpen ? "max-w-[383px]" : "max-w-[325px]"
      }`}
    >
      <img
        className={
          (customThumbnail &&
            "rounded-2xl w-[188px] object-contain line-clamp-3") ||
          `hover:rounded-none rounded-xl hover:transition-all hover:duration-300 hover:ease-in hover:delay-150 ${
            !isMenuOpen ? "w-[383px] h-[215px]" : "w-[325px] h-[183px]"
          }`
        }
        src={
          customThumbnail ||
          (info?.snippet?.thumbnails?.maxres?.url
            ? info?.snippet?.thumbnails?.maxres?.url
            : info?.snippet?.thumbnails?.high?.url)
        }
        alt={customAlt || info?.snippet?.title}
      />
      <div className="m-1 pl-1 flex flex-col">
        <span className="text-md font-semibold line-clamp-2 text-ellipsis">
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
            <span className="text-sm font-light py-1">
              {formatNumber(info?.statistics?.viewCount)}
              {" views"}
              &nbsp;•&nbsp;
              {formatTimeAgo(info?.snippet?.publishedAt)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
