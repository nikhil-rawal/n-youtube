import React from "react";
import { formatTimeAgo } from "../utils/convertValues";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoData } from "../utils/appSlice";

const ResultsVideoCard = ({
  info,
  customTitle,
  customThumbnail,
  customAlt,
  customBio,
}) => {
  const changeImageURL = (currentImageURL) => {
    return (
      currentImageURL?.replaceAll("hqdefault", "maxresdefault") || undefined
    );
  };

  const dispatch = useDispatch();

  const imageUrl = customThumbnail
    ? customThumbnail
    : info?.snippet?.thumbnails?.maxres?.url
    ? info?.snippet?.thumbnails?.maxres?.url
    : changeImageURL(info?.snippet?.thumbnails?.high?.url)
    ? changeImageURL(info?.snippet?.thumbnails?.high?.url)
    : info?.snippet?.thumbnails?.high?.url;

  return (
    <div className="flex flex-row w-11/12 ">
      <div className="cursor-pointer m-1 p-1">
        <Link
          to={`/WatchPage?v=${info?.id?.videoId}`}
          key={info?.id?.videoId}
          onClick={() => dispatch(setVideoData(info))} //sending data to appSlice - videoData
        >
          <img
            className={
              (customThumbnail &&
                "rounded-2xl w-[188px] object-contain line-clamp-3") ||
              `hover:rounded-none rounded-xl hover:transition-all hover:duration-300 hover:ease-in hover:delay-150 min-w-[500px] max-w-[500px] w-[500px]`
            }
            src={imageUrl}
            alt={customAlt || info?.snippet?.title}
          />
        </Link>
      </div>
      <div className="m-1 p-1 flex flex-col justify-start">
        <span
          className="text-lg py-1 font-medium line-clamp-2 text-ellipsis"
          dangerouslySetInnerHTML={{
            __html: customTitle || info?.snippet?.title,
          }}
        ></span>
        {info?.snippet?.publishedAt && (
          <>
            <span className="text-xs font-light py-1">
              {formatTimeAgo(info?.snippet?.publishedAt)}
            </span>
          </>
        )}
        <span className="text-sm font-normal truncate py-1">
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
        {info?.snippet?.description && (
          <span className="text-xs truncate py-1 font-light">
            {info?.snippet?.description}
          </span>
        )}
      </div>
    </div>
  );
};

export default ResultsVideoCard;
