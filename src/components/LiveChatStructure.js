import React from "react";
import { formatTimeAgo } from "../utils/convertValues";
import { GrLike } from "react-icons/gr";

const LiveChatStructure = ({ chat }) => {
  return (
    <>
      <div className="flex flex-row ml-2 pl-2 mr-1 pr-1 py-1">
        <img
          src={chat?.image}
          alt={`Message from ${chat?.username}`}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col pl-4">
          <span className="text-md font-semibold">{chat?.username}</span>
          <p className="text-sm font-normal">{chat?.message}</p>
          <div className="flex flex-row">
            <span className="text-xs text-rose-500 font-light">
              {formatTimeAgo(chat?.timestamp)}
            </span>
            <span className="text-xs flex items-center text-cyan-600 font-light ml-2 pl-2">
              <GrLike />
              &nbsp;{chat?.likes ? chat?.likes : "0"} likes
            </span>
          </div>
        </div>
      </div>
      {chat?.replies &&
        chat?.replies?.length > 0 &&
        chat?.replies?.map((nestedChat) => (
          <div className="pl-6 ml-6">
            <LiveChatStructure key={nestedChat?.id} chat={nestedChat} />
          </div>
        ))}
    </>
  );
};

export default LiveChatStructure;
