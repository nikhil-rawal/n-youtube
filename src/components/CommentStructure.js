import React from "react";

const CommentStructure = ({ comment }) => {
  console.log(comment);
  return (
    <div className="flex flex-col bg-slate-200 p-2 m-2 rounded-sm">
      <div className="flex flex-row">
        <img
          src={
            comment?.snippet?.authorProfileImageUrl ||
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt={`Comment by ${
            comment?.snippet?.authorDisplayName ||
            comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
          }`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col px-1">
          <span>
            {comment?.snippet?.authorDisplayName ||
              comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </span>
          <span
            dangerouslySetInnerHTML={{
              __html:
                comment?.snippet?.textDisplay ||
                comment?.snippet?.topLevelComment?.snippet?.textDisplay,
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
