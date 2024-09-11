import React, { useEffect, useState } from "react";
import { yt_comments_link, REACT_APP_YTKEY } from "../utils/constants";
import CommentStructure from "./CommentStructure";

const CommentsFrame = ({ videoID }) => {
  const [fetchedComments, setFetchedComments] = useState(null);
  const [formattedComments, setFormattedComments] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("Fetched", fetchedComments);
  console.log("Formatted", formattedComments);

  useEffect(() => {
    getAllComments();
  }, []);

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

  const getAllComments = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&order=relevance&videoId=${videoID}&key=${REACT_APP_YTKEY}`
      );
      // later on add - &maxResults=100, order=time || order=elevance,

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response?.json();
      setFetchedComments(json);
      console.log("json", json);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
      setErrorMessage("Comments restricted on this video");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <span>{fetchedComments?.pageInfo?.totalResults} Comments</span>
        <button>--- Sort By ---</button>
      </div>
      <input placeholder="Add a comment" />
      <hr />
      <div className="flex flex-col">
        {errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          formattedComments?.map((comment) => (
            <CommentStructure key={comment?.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsFrame;

/*

For every comment, if there is a reply => nested comment
for nested comment, if there is a reply => another nested comment
for another nested comment, if there is a reply => another another nested comment

*/
