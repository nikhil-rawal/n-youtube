import React, { useState, useCallback, useEffect, useRef } from "react";
import { liveChatData } from "./liveChatData";
import LiveChatStructure from "./LiveChatStructure";
import { MdSend } from "react-icons/md";

const LiveChatFrame = React.memo(() => {
  const [allChats, setAllChats] = useState([]);
  const [myChat, setMyChat] = useState("");
  const [chatIndex, setChatIndex] = useState(0);
  const chatContainerRef = useRef(null);

  function formatCurrentDate(timestamp) {
    return new Date(timestamp).toISOString().slice(0, -5) + "Z";
  }

  const submitMyChat = useCallback(
    (e) => {
      e.preventDefault();

      const newChat = {
        id: Math.floor(Math.random() * 1000000),
        username: "You",
        message: myChat,
        timestamp: formatCurrentDate(Date.now()),
        image: `https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 100
        )}.jpg`,
        likes: Math.floor(Math.random() * 20),
      };

      setAllChats((prevChats) => [...prevChats, newChat]);
      setMyChat("");
    },

    [myChat]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatIndex < liveChatData?.length) {
        setAllChats((prevChats) => [...prevChats, liveChatData[chatIndex]]);
        setChatIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [chatIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [allChats]);

  console.log(allChats);

  return (
    <div className="relative pt-8">
      <div
        className="flex flex-col-reverse hover:bg-top bg-bottom overflow-y-scroll h-[500px]"
        ref={chatContainerRef}
      >
        {allChats?.map((chat) => (
          <LiveChatStructure chat={chat} key={chat?.id} />
        ))}
      </div>
      <div>
        <form onSubmit={submitMyChat} className="flex justify-end">
          <input
            placeholder="Send chat"
            className="h-[42px] border-b-slate-100 border w-10/12 p-4 outline outline-none  dark:bg-black dark:border-neutral-800"
            onChange={(e) => setMyChat(e.target.value)}
            value={myChat}
          />
          <div className="flex items-center justify-center border-none h-[42px] w-14 bg-gray-50 dark:bg-gray-950 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-xs">
            <button type="submit">
              <MdSend className="size-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default LiveChatFrame;
