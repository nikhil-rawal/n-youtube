import React, { useEffect, useState } from "react";
import { yt_comments_link, REACT_APP_YTKEY } from "../utils/constants";
import CommentStructure from "./CommentStructure";

const CommentsFrame = ({ videoID }) => {
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    const formatComments = (comments, level = 0) => {
      return comments?.map((comment) => ({
        id: comment?.id,
      }));
    };
    getAllComments();
  }, []);

  const getAllComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&order=relevance&videoId=${videoID}&key=${REACT_APP_YTKEY}`
    );
    // later on add - &maxResults=100, order=time || order=elevance,

    const json = await data.json();
    setCommentsData(json);
  };

  // const allComments = (comment) => {
  //   <div>
  //     <CommentStructure />
  //     <div>{comment.replies && }</div>
  //   </div>;
  // };
  console.log(commentsData);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <span>{commentsData?.pageInfo?.totalResults} Comments</span>
        <button>--- Sort By ---</button>
      </div>
      <input placeholder="Add a comment" />
      <hr />
      <div className="flex flex-col">
        {commentsData?.items?.map((comment) => (
          <CommentStructure key={comment?.id} comment={comment} />
        ))}
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
