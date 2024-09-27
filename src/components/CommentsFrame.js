import React, { useEffect, useState, useCallback } from "react";
import { REACT_APP_YTKEY } from "../utils/constants";
import CommentStructure from "./CommentStructure";
import { MdSend } from "react-icons/md";

const CommentsFrame = React.memo(({ videoID }) => {
  const [fetchedComments, setFetchedComments] = useState(null);
  const [formattedComments, setFormattedComments] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [myComment, setMyComment] = useState("");

  useEffect(() => {
    const formatComments = (fetchedComments, level = 0) => {
      if (fetchedComments?.items !== undefined) {
        return fetchedComments?.items?.map((comment) => ({
          id: comment?.id,
          authorImage:
            comment?.snippet?.authorProfileImageUrl ||
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
          authorName:
            comment?.snippet?.authorDisplayName ||
            comment?.snippet?.topLevelComment?.snippet?.authorDisplayName,
          authorComment:
            comment?.snippet?.textDisplay ||
            comment?.snippet?.topLevelComment?.snippet?.textDisplay,
          level,
          replies: comment?.replies
            ? formatComments(comment?.replies?.comments, level + 1)
            : [],
        }));
      }
      if (fetchedComments !== undefined)
        return fetchedComments?.map((comment) => ({
          id: comment?.id,
          authorImage:
            comment?.snippet?.authorProfileImageUrl ||
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
          authorName:
            comment?.snippet?.authorDisplayName ||
            comment?.snippet?.topLevelComment?.snippet?.authorDisplayName,
          authorComment:
            comment?.snippet?.textDisplay ||
            comment?.snippet?.topLevelComment?.snippet?.textDisplay,
          level,
          replies: comment?.replies
            ? formatComments(comment?.replies?.comments, level + 1)
            : [],
        }));
    };

    setFormattedComments(formatComments(fetchedComments));
  }, [fetchedComments]);

  const getAllComments = useCallback(async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&order=relevance&videoId=${videoID}&key=${REACT_APP_YTKEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response?.json();
      setFetchedComments(json);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
      setErrorMessage("Comments restricted on this video");
    }
  }, [videoID]);

  useEffect(() => {
    getAllComments();
    // eslint-disable-next-line no-use-before-define
  }, [getAllComments]);

  // Handling input form comments submission
  const submitMyComment = useCallback(
    (e) => {
      if (myComment) {
        e.preventDefault();
        formattedComments.unshift({
          authorComment: myComment,
          authorImage:
            "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
          authorName: "You",
          id: Math.floor(Math.random() * 1000000),
          level: 0,
        });
        setMyComment("");
      }
    },
    [myComment, formattedComments]
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <span className="font-semibold text-lg">
          Top {formattedComments?.length} Comments
        </span>
        {/* <button>--- Sort By ---</button> */}
      </div>
      <form onSubmit={submitMyComment} className="flex">
        <input
          placeholder="Add a comment"
          className="h-[42px] w-full p-4 border-none outline-none focus:outline-none focus:border-none  dark:bg-black dark:border-neutral-800"
          onChange={(e) => setMyComment(e.target.value)}
          value={myComment}
        />
        <div className="flex items-center justify-center border-none h-[42px] w-14 bg-gray-50 dark:bg-gray-950 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-xs">
          <button type="submit">
            <MdSend className="size-6" />
          </button>
        </div>
      </form>
      <hr />
      <div className="flex flex-col">
        {errorMessage ? (
          <div className="flex text-xl m-4 p-4 text-orange-400">
            {errorMessage}
          </div>
        ) : (
          formattedComments?.map((comment) => (
            <CommentStructure key={comment?.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
});

export default CommentsFrame;
