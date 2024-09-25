import React from "react";
import { formatNumber } from "../utils/convertValues";
import { GrView } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

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
          <span className="text-xl font-semibold truncate content-center">
            {videoData?.snippet?.title}
          </span>
          <br />
          <div className="flex flex-row justify-between">
            <span className="text-lg font-semibold text-red-500 hover:text-red-400">
              {videoData?.snippet?.channelTitle}
            </span>
            <div className="text-sm font-light flex flex-row">
              <div className="flex flex-row px-4 bg-gray-200 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl cursor-pointer content-evenly justify-center items-center">
                <button>
                  <GrView className="size-4" />
                </button>
                <p className="text-[14px] ml-2">
                  {formatNumber(videoData?.statistics?.viewCount)} views
                </p>
              </div>
              &nbsp;•&nbsp;
              <div className="flex flex-row px-4 bg-gray-200 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl cursor-pointer content-evenly justify-center items-center">
                <button>
                  <FaRegComment className="size-4" />
                </button>
                <p className="text-[14px] ml-2">
                  {formatNumber(videoData?.statistics?.commentCount)} comments{" "}
                </p>
              </div>
              &nbsp;•&nbsp;
              <div className="flex flex-row px-4 bg-gray-200 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-xl cursor-pointer content-evenly justify-center items-center">
                <button>
                  <AiOutlineLike className="size-4" />
                </button>
                <p className="text-[14px] ml-2">
                  {formatNumber(videoData?.statistics?.likeCount)} likes{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFrame;
