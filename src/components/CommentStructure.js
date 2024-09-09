import React from "react";

const CommentStructure = ({ comment }) => {
  return (
    <div
      className={`flex flex-col bg-slate-200 p-${comment?.level * 2 + 2} m-${
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
        <div className="flex flex-col px-1">
          <span>{comment?.authorName}</span>
          <span
            dangerouslySetInnerHTML={{
              __html: comment?.authorComment,
            }}
          />
        </div>
      </div>
      {comment?.replies && comment?.replies?.length > 0 && (
        <div>
          {comment?.replies?.map((reply) => (
            <CommentStructure key={reply?.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentStructure;
