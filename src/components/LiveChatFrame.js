import React from "react";
import { liveChatData } from "./liveChatData";
import LiveChatStructure from "./LiveChatStructure";

const LiveChatFrame = () => {
  return (
    <div className="flex flex-col">
      {liveChatData?.map((chat) => (
        <LiveChatStructure chat={chat} key={chat?.id} />
      ))}
    </div>
  );
};

export default LiveChatFrame;
