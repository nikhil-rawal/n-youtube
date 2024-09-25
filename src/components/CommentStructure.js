import React, { useState, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSend } from "react-icons/md";

const CommentStructure = React.memo(({ comment }) => {
  const [toggleReply, setToggleReply] = useState(false);
  const [isReplied, setIsReplied] = useState(false);
  const [finalReply, setFinalReply] = useState({});
  const [myReply, setMyReply] = useState("");

  const toggleReplyInput = () => {
    setToggleReply(!toggleReply);
  };

  // Handling input form reply submission
  const submitMyReply = useCallback(
    (e) => {
      if (myReply) {
        e.preventDefault();
        setFinalReply({
          authorComment: myReply,
          authorImage:
            "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
          authorName: "You",
          id: Math.floor(Math.random() * 1000000),
          level: comment.level + 1,
        });
        setMyReply("");
        toggleReplyInput();
        setIsReplied(true);
      }
    },
    [myReply, comment.level]
  );

  return (
    <div
      className={`flex flex-col p-${comment?.level * 2 + 2} m-${
        comment?.level * 2 + 2
      } rounded-sm }`}
    >
      <div
        className={`flex flex-row pl-${comment?.level * 2 + 2} ml-${
          comment?.level * 2 + 2
        }`}
      >
        <img
          src={comment?.authorImage}
          alt={`Comment by ${comment?.authorName}`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col pl-4 px-1 text-sm">
          <span className="font-semibold">{comment?.authorName}</span>
          <span
            dangerouslySetInnerHTML={{
              __html: comment?.authorComment,
            }}
          />
        </div>
      </div>
      <div className="m-1 p-1">
        <button
          className="text-red-500 hover:text-red-400 font-light text-sm justify-end ml-16"
          onClick={toggleReplyInput}
        >
          {!toggleReply ? "Add a Reply?" : "Cancel Reply!"}
        </button>
        {toggleReply && (
          <form onSubmit={submitMyReply} className="flex">
            <input
              placeholder="Add a Reply"
              className="h-[42px] border-b-slate-100 border w-full p-4 outline outline-none  dark:bg-black dark:border-neutral-800"
              onChange={(e) => setMyReply(e.target.value)}
              value={myReply}
            />
            <div className="flex items-center justify-center border-none h-[42px] w-14 bg-gray-50 dark:bg-gray-950 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-xs">
              <button type="submit">
                <MdSend className="size-6" />
              </button>
            </div>
          </form>
        )}
      </div>
      {isReplied && (
        <div className="relative">
          {/* Nested replies */}
          <CommentStructure key={myReply?.id} comment={finalReply} />
        </div>
      )}
      {comment?.replies && comment?.replies?.length > 0 && (
        <div>
          <br />
          <div className=" ml-10 absolute items-center flex bg-sky-500 hover:bg-sky-400 rounded-xl cursor-pointer p-1">
            <IoIosArrowDown />
            <span>{comment?.replies?.length} original replies</span>
          </div>
          <br />
          <br />
          {comment?.replies?.map((reply) => (
            <CommentStructure key={reply?.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
});

export default CommentStructure;
