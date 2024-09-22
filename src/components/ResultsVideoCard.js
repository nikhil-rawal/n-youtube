import React from "react";
import { formatNumber, formatTimeAgo } from "../utils/convertValues";
import { useSelector } from "react-redux";

const ResultsVideoCard = ({
  info,
  customTitle,
  customThumbnail,
  customAlt,
  customBio,
}) => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const changeImageURL = (currentImageURL) => {
    return (
      currentImageURL?.replaceAll("hqdefault", "maxresdefault") || undefined
    );
  };

// from here, results go to ResultsFrame, then repopulate
// same case with Comment, get results, send to CommentsFrame, then repopulate
// also change async methods for comments
// change styling

  const imageUrl = customThumbnail
    ? customThumbnail
    : info?.snippet?.thumbnails?.maxres?.url
    ? info?.snippet?.thumbnails?.maxres?.url
    : changeImageURL(info?.snippet?.thumbnails?.high?.url)
    ? changeImageURL(info?.snippet?.thumbnails?.high?.url)
    : info?.snippet?.thumbnails?.high?.url;

  return (
    <div className={`flex mx-2 my-8 cursor-pointer}`}>
      <img
        className={
          (customThumbnail &&
            "rounded-2xl w-[188px] object-contain line-clamp-3") ||
          `hover:rounded-none rounded-xl hover:transition-all hover:duration-300 hover:ease-in hover:delay-150 ${
            !isMenuOpen ? "w-[383px] h-[215px]" : "w-[325px] h-[183px]"
          }`
        }
        src={imageUrl}
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

export default ResultsVideoCard;
