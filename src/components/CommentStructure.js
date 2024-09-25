import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CommentStructure = ({ comment }) => {
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
      {comment?.replies && comment?.replies?.length > 0 && (
        <div>
          <br />
          <div className=" ml-10 absolute items-center flex bg-sky-500 hover:bg-sky-400 rounded-xl cursor-pointer p-1">
            <IoIosArrowDown />
            <span>{comment?.replies?.length} replies</span>
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
};

export default CommentStructure;
